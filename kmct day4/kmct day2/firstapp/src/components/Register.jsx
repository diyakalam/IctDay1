import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <Typography variant='h4'>
            <u>LOGIN</u>
        </Typography>
        <TextField  label="Username" variant="outlined" /><br/>
        <TextField label="Password" variant="outlined" /><br/>
        <Button variant="contained">SIGN IN</Button>
    </div>
  )
}

export default Register