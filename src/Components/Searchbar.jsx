import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Searchbar() {
  const[searchterm, setsearchterm] = useState('')
  const navigate = useNavigate()
  const handlesubmit = (e)=>{
    e.preventDefault()

    if(searchterm){
      navigate(`/search/${searchterm}`)
      setsearchterm('')
    }
  }
  return (
    <Paper component= 'form' onSubmit={handlesubmit} sx={{marginTop: '20px'}}>
        <input className='searchbox' type="text" placeholder='search heree' value={searchterm} onChange={(e)=>setsearchterm(e.target.value)}/>
        <IconButton sx={{color: 'red', fontweight: 'bold'}}><Search/></IconButton>
    </Paper>
  )
}

export default Searchbar