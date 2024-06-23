import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2>Welcome React</h2>

       <h2>Sign-up</h2>
     <label for="name">Name</label>
     <input type="text" name="name" id="name"/><br/><br/>
     Email:
     <input type="email" name="email" id="email"/><br/><br/>
     Password:
     <input type="password" name="password" id="password"/><br/><br/>    
     <input type="submit" name="submit" id="submit"/><br/><br/>  
    </div>
  )
}

export default Signup

