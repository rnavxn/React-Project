import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginForm = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate('../home')
    }
    return (

        <div className='wrapper'>
            <form action="home">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username/ Email' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="http://localhost:3000/forgotpassword">Forgot password?</a>
                </div>

                {/* <button type="submit">
                    Login
                </button> */}
                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined" 
                        onClick={home} 
                        type='submit'
                        style={{background:'#e76f51', color:'white'}} 
                    >
                        Login
                    </Button>
                </Stack>
                <div className="register-link">
                    <p>Don't have an account? <a href="http://localhost:3000/Register">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm