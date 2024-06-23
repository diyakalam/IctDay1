import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <AppBar position='static'>
        <Toolbar>
        <Typography variant='h6'>
            <b>EMPLOYEE</b>
        </Typography>
        <Button variant='contained' color='secondary'>
        <Link to='/ad'>
         Add Data
        </Link>
        </Button>&nbsp;
        <Button variant='contained' color='secondary'>
        <Link to='/vw'>
         View Data
        </Link>
        </Button>&nbsp;
        </Toolbar>
    </AppBar>
    </div>
  )
}
export default Navbar