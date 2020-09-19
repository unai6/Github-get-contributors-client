import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/home.css';

export const Home = () => {
    return (
        <div className='view'>
            <div className='layer'> 
                <img className='github-pic'  src='https://cdn.pixabay.com/photo/2017/08/05/11/24/logo-2582757_960_720.png' alt='github-pic'/>
                <Link className='mainTitle' to='/contributors'>Git Searcher</Link>
            </div>
        </div>
    )
}
