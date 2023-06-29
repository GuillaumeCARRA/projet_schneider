import React from 'react';

import './footer.css'; 

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <ul className='footer__items'>
                    <li 
                        className='footer__item'
                    >
                        <a 
                            href='/'
                            className='footer__link'
                        >
                            Nos solutions
                        </a> 
                    </li>
                    <li 
                        className='footer__item'
                    >
                        <a 
                            href='/'
                            className='footer__link'
                        >
                            Documentation
                        </a>
                    </li>
                    <li 
                        className='footer__item'
                    >
                       <a 
                            href='/'
                            className='footer__link'
                        >
                            Téléchargement
                        </a> 
                    </li>
                    <li 
                        className='footer__item'
                    >
                        <a 
                            href='/'
                            className='footer__link'
                        >
                            FAQ
                        </a>
                    </li>
                </ul>
            </div>
            <span className='footer__se'>
                    ©2023, Schneider Electric
            </span>
        </footer>
    )
}

export default Footer;