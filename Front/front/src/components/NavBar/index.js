import React from 'react';

import './navbar.css'; 

function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__logo'>
                    logo
                </div>  
                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <a 
                            href="/"
                            className='navbar__link'
                        >
                            Accueil
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a 
                            href="/"
                            className='navbar__link'
                        >
                            Nos Solutions
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a 
                            href="/"
                            className='navbar__link'
                        >
                            Documentation
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a 
                            href="/"
                            className='navbar__link'
                        >
                            Téléchargement
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a 
                            href="/"
                            className='navbar__link'
                        >
                            FAQ
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar; 