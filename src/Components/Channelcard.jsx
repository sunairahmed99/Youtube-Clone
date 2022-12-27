import React from 'react';
import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

function Channelcard({channel: {snippet, id:{channelId}}}) {
    console.log(channelId)
  return (
    <Box sx={{height: '310px', width: {sx: '100%', md:'250px'}, background: 'black'}}>
     <Link to={`channel/${channelId}`}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} style={{height: '90%', width: '100%', borderRadius: '50%'}}/>
        </Link>
        
        <Typography sx={{textAlign: 'center', color: 'white'}}>
        <Link to={`channel/${channelId}`}>
            {snippet.title}
            </Link>
        </Typography>
        

    </Box>
  )
}

export default Channelcard