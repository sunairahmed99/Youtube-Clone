import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { Box, Stack } from '@mui/system';
import YouTube from 'react-youtube';
import Relatedvideo from './Relatedvideo';


const opts = {
    height: '500',
    width: '100%',
    
  };


function VideoId() {
    const {videoId} = useParams()
    const[Vide, Setvideo] = useState(null)
    const[rvideo, setrvideo] = useState(null)
    console.log(Vide)
    console.log(rvideo)
    
    
    

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: `https://youtube-v31.p.rapidapi.com/videos`,
            params: {part: 'snippet,statistics', id: `${videoId}`},
            headers: {
              'X-RapidAPI-Key': '656d127d5amshbeef79a8b5ba549p14b883jsndd044fb04777',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              Setvideo(response.data.items);
          }).catch(function (error) {
              console.error(error);
          });

          const optionss = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
              relatedToVideoId: `${videoId}`,
              part: 'id,snippet',
              type: 'video',
              maxResults: '50'
            },
            headers: {
              'X-RapidAPI-Key': '656d127d5amshbeef79a8b5ba549p14b883jsndd044fb04777',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
          
          axios.request(optionss).then(function (response) {
              setrvideo(response.data.items);
          }).catch(function (error) {
              console.error(error);
          });

          

    },[videoId])

    
    
    
  return (
    <Stack direction='column' sx={{flexDirection: {sx: 'column', md: 'row'}}}>
        <Box sx={{width:{sx: '100%'}, flex:{md:2}, gap: {md: '2rem'}}}>
        
            <YouTube videoId={videoId} opts={opts} />
        </Box>

        <Box sx={{border: '1px solid green', flex: 1}}>
            {
                rvideo?.map((item, index)=>{
                    console.log(item)
                    return(
                        <Box key={index}>
                          <Relatedvideo rvideo={item}/>
                        </Box>
                    )
                })
            }
           

        </Box>
    </Stack>
  )
}

export default VideoId