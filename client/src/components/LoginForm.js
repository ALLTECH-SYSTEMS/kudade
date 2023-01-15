import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./OrderItem.css";

const LoginForm = ({ setUser }) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        if (!username || !password) return;
        setUser({ username: username, password: password });
        navigate('/order-items');
    }

  return (
    <>
    <section className='single-order'>
        <h4 className='login-header'> Kindly enter your Seller ID and Zip Code Prefix to Access Your Order Items </h4>  
        <form onSubmit={handleClick}>  
            <div className="container">   
                <label>Username : </label>   
                <input type="text" placeholder="Enter seller_id" value={username}
            onChange={(e) => setUsername(e.target.value)} required  />  
                <label>Password : </label>   
                <input type="password" placeholder="Enter seller_zip_code_prefix" value={password}
            onChange={(e) => setPassword(e.target.value)} required /> 
                <button type="submit">Login</button>   
                {/* <input type="checkbox" checked="checked" /> Remember me   
                <button type="button" class="cancelbtn"> Cancel</button>   
                Forgot <a href="#"> password? </a>    */}
            </div>   
        </form>
    </section>
    </>
  )
}

export default LoginForm