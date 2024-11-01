import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import { Routes, Route } from 'react-router-dom'
import LoginForgot from '../LoginForm/LoginForgot'
import Home from '../Home/Home'

const Navigate = () => {
    return (
    <>
            <Routes>
                <Route path='/'element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/login'element={<LoginForm />}></Route>
                <Route path='/forgotpassword'element={<LoginForgot />}></Route>
                <Route path='/register' element={<RegisterForm />}></Route>
            </Routes>
    </>

    )
}

export default Navigate