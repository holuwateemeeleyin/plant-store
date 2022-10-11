import React from 'react'
import './Login.css'
import LoginImg from '../../Assets/Rectangle.png'
// import Flower from '../../Assets/Frame205.svg'
import Flower from '../../Assets/Frame_flower.png'
import EmailIcon from './EmailIcon'
import PadlockIcon from './PadlockIcon'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className='login-container'>
            <img src={LoginImg} alt='login' />
            <div className='login-header-container'>
                <div className='login-header'>
                    <h2>
                        Welcome back
                    </h2>
                    <p>
                        Login to your account
                    </p>
                </div>
                <img src={Flower} alt='flower'/>
            </div>
            <div className='input-container'>
                <div className='input-container-single'>
                    <div className='input-content'>
                        <EmailIcon />
                        <input placeholder="Enter Email" />
                    </div>

                </div>
                <div className='input-container-single'>
                    <div className='input-content'>
                        <PadlockIcon />
                        <input className='password_input' type='password' placeholder="......" />
                    </div>
                </div>
                <div className='forgot-pswd'>
                    Forgot Password ?
                </div>
                <button type='button' className='button'>
                    Login
                </button>
                <div className='account'>
                    Don't have an account?
                    <Link to='/signup' style={{color:'#1C8A4A', fontWeight:'600'}}> Signup</Link>
                </div>
            </div>

        </div>
    )
}
