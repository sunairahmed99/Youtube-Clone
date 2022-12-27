import { Stack } from '@mui/system'
import React from 'react'
import { categories } from '../utils/constants'



function Sidebar({Name, Setname}) {
  
  
  
  console.log(Name)
  return (
    <Stack direction='row' sx={{flexDirection: {sx: 'row', md: 'column'}, overflowY: 'auto', mt:'1.7rem' }}>
        {
            categories.map((item, index)=>{
                return(
                    <button key = {index} className='catbtn' style={{background: item.name === Name && 'red', color: 'white'}} onClick={()=>Setname(item.name)}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                </button>


                )
               
            })
            
        }

    </Stack>
  )
}

export default Sidebar