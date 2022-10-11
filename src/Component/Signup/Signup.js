import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
  return (
    <div className='signup-container'>
        <button className='back' onClick={()=> navigate('/')}>{`<`}</button>
    </div>
  )
}
