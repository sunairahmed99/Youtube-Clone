import {Box, Typography} from  '@mui/material'
import { useEffect} from 'react'
import axios from 'axios'
import Videochannel from './Videochannel';
import { useReducer } from 'react';
import { useParams } from 'react-router-dom';

const reducer = (state, action)=>{
  switch(action.type){
    case 'FETCH_PENDING':
      return{...state, loading: true}
     case  'FETCH_SUCCESS':
      return{...state, video: action.payload, loading: false}
      case 'FETCH_FAILED':
        return{error: action.payload}
      default:
        return{...state}  
  }


}





function SearchFeed() {
 
  const{searchTerm} = useParams()
  
  const[{video}, dispatch] = useReducer(reducer, {

    loading: 'true',
    error: '',
    video: []


  })

 

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: `${searchTerm}`,
        part: 'snippet,id',
        maxResults: '50',
    
      },
      headers: {
        'X-RapidAPI-Key': '656d127d5amshbeef79a8b5ba549p14b883jsndd044fb04777',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    const fetchdata = async()=>{
      dispatch({type: 'FETCH_PENDING'});
      try{
        const result = await axios.request(options)
        dispatch({type: 'FETCH_SUCCESS', payload: result.data.items})

      }
      catch(err){
        dispatch({type: 'FETCH_FAILED', payload: err.message})

      }
    }
    fetchdata()
   
  }, [searchTerm])

  

  return (
    <Box sx={{border: '1px solid black', flex: '2'}}>
    <Typography sx={{color: 'white'}}>
    Search Result For: <span style={{color: 'red', fontSize: '1.3rem', fontWeight: 'bold', textTransform: 'capitalize'}}>{searchTerm}</span> Videos
    </Typography>
    <Videochannel Video = {video} />

   
  </Box>
    
    

      

     
  )
}

export default SearchFeed