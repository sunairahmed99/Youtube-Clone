import React from 'react'
import { Card, CardMedia, Typography, CardContent} from '@mui/material'
import {Link} from 'react-router-dom';

function Relatedvideo({rvideo:{snippet, id:{videoId}}}) {
    console.log(snippet)
  return (
    <Card variant="outlined" sx={{background: 'black'}}>
      <Link to = {`/videos/${videoId}`}>
        <CardMedia sx={{height: '230px'}}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} style={{height:'100%', width: '100%', marginTop: '-24px'}}/>
        </CardMedia>
        </Link>
        <Link to = {`/videos/${videoId}`}>

        <CardContent sx={{background: 'black'}}>
            <Typography sx={{color: 'white'}}>
            {snippet.title.slice(0,30)}

            </Typography>
           

        </CardContent>
        </Link>
        
        
        
        
    </Card>
  )
}

export default Relatedvideo