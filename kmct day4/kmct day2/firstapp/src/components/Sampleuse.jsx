import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sampleuse = () => {
    var[data,setdata]=useState("Welcome");
    const submitreact=()=>{
        setdata("Hello React")
    }
    const submitangular=()=>{
        setdata("Hello Triangular")
    }
    const submitview=()=>{
        setdata("Hello View")
    }
  return (
    <div>
        <Typography variant="h6">{data}</Typography>
        <Button variant="contained" onClick={submitreact}>React</Button> <br/><br />
        <Button variant="contained" onClick={submitangular}>Angular</Button><br/><br />
        <Button variant="contained" onClick={submitview}>View</Button><br /><br />
        
        
    </div>
  )
}

export default Sampleuse