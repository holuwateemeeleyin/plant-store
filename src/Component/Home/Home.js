import React from 'react'
import HomeImg from '../../Assets/home.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className='home-container'>
      <img src={HomeImg} alt='Home'/>
      <button className='continue'
        onClick={()=> navigate('/login')}
      >
        {`>`}
      </button>
    </div>
  )
}
