import Sidebar from './Sidebar'
import {Stack, Box, Typography} from  '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Videochannel from './Videochannel';
import { useReducer } from 'react';


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





function Feedy() {
  const[Name, Setname] = useState('New');
  
  const[{loading, error, video}, dispatch] = useReducer(reducer, {

    loading: 'true',
    error: '',
    video: []


  })

 

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: Name,
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
   
  }, [Name])

  

  return (
    
    <Stack direction='column' sx={{border: '1px solid black', flexDirection: {sx:'column', md: 'row'}}}>
      {loading? (<div style={{textAlign: 'center', fontsize: '2rem', color: 'white'}}>loadinggg....</div>) : error? (<div style={{color: 'white'}}>server down try laterrr</div>) :( <>
        <Box>
            <Sidebar Name={Name} Setname={Setname}/>
        </Box>

        <Box sx={{border: '1px solid black', flex: '2'}}>
          <Typography>
          {Name} Videos
          </Typography>
          <Videochannel Video = {video} />

         
        </Box>

      </>)}
      
        
      
       
     

    </Stack>
  )
}

export default Feedy