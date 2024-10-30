import React from 'react'
import './RegisterForm.css'
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
    const home = () => {
        navigate('../home')
    }
    return (
        <div className='main'>
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='First Name' required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Last Name' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email' required />
                    <IoMdMail className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                </div>

                {/* <button type="submit">
                    Register
                </button> */}
                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined"
                        onClick={home}
                        type='submit'
                        style={{ background: '#e76f51', color: 'white' }}
                    >
                        Register
                    </Button>
                </Stack>
                <div className="register-link">
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
        </div>
    )
}

export default RegisterForm