import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <AppBar position='static'>
        <Toolbar>
        <Typography variant='h6'>
            HillView
        </Typography>
        <Button variant='contained' color='secondary'>
        <Link to='/'>
         Sign-Up
        </Link>
        </Button>&nbsp;
        <Button variant='contained' color='success'>
            <Link to='/sin'> Login</Link></Button>&nbsp;
            <Button variant='contained' color='secondary'>
        <Link to='/sb'>
         State
        </Link>
        
        </Button>&nbsp;
        <Button variant='contained' color='secondary'>
        <Link to='/co'>
         Counter
        </Link>
        
        </Button>&nbsp;

        <Button variant='contained' color='secondary'>
        <Link to='/mp'>
         Listmap
        </Link>
        
        </Button>&nbsp;

        <Button variant='contained' color='secondary'>
        <Link to='/ap'>
         Api
        </Link>
        
        </Button>&nbsp;

        <Button variant='contained' color='secondary'>
        <Link to='/sa'>
        Sampleuse
        </Link>
        
        </Button>&nbsp;

        <Button variant='contained' color='secondary'>
        <Link to='/cg'>
        Cardget
        </Link>
        
        </Button>&nbsp;
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar