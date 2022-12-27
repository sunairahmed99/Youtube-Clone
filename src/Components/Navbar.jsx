import { Stack } from '@mui/system'
import React from 'react'
import Searchbar from './Searchbar'
import {logo} from '../utils/constants';

function Navbar() {
  return (
    <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'center', pt: '.3rem', pb: '.3rem', pl: '1rem', pr: '2rem', background: 'black', color: 'white', mb:'1rem'}}>
        <img src={logo} style={{width:'50px', height: '50px', marginTop: '20px'}} alt="" />
        <Searchbar/>
    </Stack>
  )
}

export default Navbar