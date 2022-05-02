// import React from 'react';
// import ReactDOM from 'react-dom';
import summer from './images/summer.jpg'


export default function Header() {
    return (
        <div>
            <nav className='nav'>
                <img src={summer} className='nav-icon' alt="" />
                <h2>This is some navbar text</h2>
                <ul className='nav-items'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </nav>
        </div>
    )
}

