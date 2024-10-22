import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForgot from '../LoginForm/LoginForgot'
import Homepage from '../HomePage/Homepage'

const Navigate = () => {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<LoginForm />}></Route>
                <Route path='/login'element={<LoginForm />}></Route>
                <Route path='/forgotpassword'element={<LoginForgot />}></Route>
                <Route path='/register' element={<RegisterForm />}></Route>
                <Route path='/home' element={<Homepage />}></Route>
            </Routes>
        </BrowserRouter>
    </>

    )
}

export default Navigate