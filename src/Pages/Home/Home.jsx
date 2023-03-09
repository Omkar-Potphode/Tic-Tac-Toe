import React from 'react';
import { useNavigate } from 'react-router-dom';
import start_logo from '../../Assets/start_img.jpg';
import './Home.css'

function Home() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/game')

  return (
    <div className='container'>
      <div className='left-wrapper'>
        <div className='left-text'>Let's Play The Tic-Tac-Toe Game!</div>
        <button className='left-btn' onClick={handleClick}>Start a New Game</button>
      </div>
      <img className='img_start' src={start_logo} alt='ic-tac-toe'/>
    </div>
  )
}

export default Home