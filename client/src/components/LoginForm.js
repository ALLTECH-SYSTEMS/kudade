import React, { useEffect } from 'react'

const LoginForm = ({username, password, setClick}) => {

    
    const handleClick = (e) => {
        e.preventDefault();
        setClick(true)
        
    }

  useEffect(()=>{
    
  },[])

  return (
    <>
        <h4> Kindly enter your Seller ID and Zip Code Prefix to Access Your OrderItems </h4>  
        <form onSubmit={handleClick}>  
            <div className="container">   
                <label>Username : </label>   
                <input type="text" placeholder="Enter seller_id" name="username" ref={username} required  />  
                <label>Password : </label>   
                <input type="password" placeholder="Enter seller_zip_code_prefix" name="password" ref={password} required /> 
                <button type="submit">Login</button>   
                {/* <input type="checkbox" checked="checked" /> Remember me   
                <button type="button" class="cancelbtn"> Cancel</button>   
                Forgot <a href="#"> password? </a>    */}
            </div>   
        </form>
    </>
  )
}

export default LoginForm