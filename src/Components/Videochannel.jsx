import { Stack, Box } from '@mui/system'
import React from 'react'
import Channelcard from './Channelcard'
import Videocard from './Videocard'

function Videochannel({Video}) {
    
  return (
    <Stack direction='column' sx={{flexWrap: 'wrap', gap: '.7rem', flexDirection: {sx: 'column', md: 'row'}}}>
        {
            Video.map((item, index)=>{
                return(
                    
                    <Stack key = {index} >
                        <Box sx={{flexDirection: {sx: 'column', md: 'row'}, width: {sx: '100%', md: '210px'}, marginLeft: {
                            sx: '0', md: '20px'}}}>
                        
                            {item?.id?.videoId && <Videocard video = {item}/>}
                            {item?.id?.channelId && <Channelcard channel={item}/>}
                            

                        </Box>


                    </Stack>
                )
            })
        }
    </Stack>
  )
}

export default Videochannel