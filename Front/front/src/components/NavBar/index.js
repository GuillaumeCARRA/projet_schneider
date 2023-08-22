import React from 'react';
import { Link } from 'react-router-dom'; 
import LogoSE from '../../assets/images/logoSE.png';


import './navbar.css'; 

function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__logo'>
                    <img 
                        className='logo'
                        src={LogoSE}
                        alt="logo schneider"
                    />
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
                        <Link
                            to="/product"
                            className='navbar__link'
                        >
                            Nos Solutions
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <Link 
                            to="/documentation-file"
                            className='navbar__link'
                        >
                            Documentation
                        </Link>
                    </li>
                    <li className='navbar__item'>
                        <Link
                            to="/faq-ask"
                            className='navbar__link'
                        >
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar; 