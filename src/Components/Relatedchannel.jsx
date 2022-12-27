import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Stack } from '@mui/system'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


function Relatedchannel() {
    const {channelId} = useParams()
    const[channel, setchannel] = useState(null)
    console.log(channel?.snippet)
    
    

    

    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/channels',
            params: {part: 'snippet,statistics', id: `${channelId}`},
            headers: {
              'X-RapidAPI-Key': '656d127d5amshbeef79a8b5ba549p14b883jsndd044fb04777',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setchannel(response.data.items[0]);
          }).catch(function (error) {
              console.error(error);
          });

         






    },[channelId])
  return (
    <Stack>
        <Box sx={{width: '100%', height: '200px', background: 'indigo', display: 'flex', justifyContent: 'center'}}>

            <img src={channel?.snippet?.thumbnails?.high?.url} alt=""  style={{width: '200px', height: '200px', borderRadius: '50%'}} />
        </Box>
        

    </Stack>
  )
}

export default Relatedchannel