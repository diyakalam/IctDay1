import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setFname]=useState('Diya')
    var[val,setval]=useState()
    const submithandler=()=>{
        setFname(val)
    
    }
    const handleInput=(e)=>{
        console.log(e.target.value)
        setval(e.target.value)
    }
  return (
    <div>
        <Typography variant='h6'>
            Welcome {fname}
        </Typography>
        <TextField variant="outlined" label="Type your name" onChange={handleInput}/><br/>
        <Button variant="contained" onClick={submithandler}>submit</Button>

    </div>
  )
}

export default StateBasics