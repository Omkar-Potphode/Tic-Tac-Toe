import React from 'react';
import './ResetButton.css';
import { useNavigate } from 'react-router-dom';

export const ResetButton = ({resetBoard}) => {
    const navigate = useNavigate();
    const backHome = () => navigate("/")

    return (
        <div className='btn_container'>
            <button className='resetBtn' onClick={resetBoard}>Reset</button>
            <button className='homeBtn' onClick={backHome}>Home</button>
        </div>
    )
}
