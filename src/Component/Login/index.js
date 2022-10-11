import React from 'react'
import './Login.css'
import LoginImg from '../../Assets/Rectangle.png'
// import Flower from '../../Assets/Frame205.svg'
import Flower from '../../Assets/Frame_flower.png'
import EmailIcon from './EmailIcon'
import PadlockIcon from './PadlockIcon'
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
                <img src={Flower} />
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
            </div>

        </div>
    )
}
