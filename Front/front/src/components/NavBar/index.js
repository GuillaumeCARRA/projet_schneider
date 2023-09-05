import React, {useState, useEffect} from 'react';
import instance from '../../axios';
import { Link } from 'react-router-dom'; 
import LogoSE from '../../assets/images/logoSE.png';


import './navbar.css'; 

function NavBar() {

    const [userProfile, setUserProfile] = useState('');

    console.log('user', userProfile);

    useEffect(() => {
       const fecthUser = async () => {
            try {
                const response = await instance.get('/'); 
                console.log(response);
                setUserProfile(response.data.userProfile);
            } catch (error) {
                console.log("err", error);
            }
       }
       fecthUser();
    }, []);

 

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
                        <Link
                            to="/"
                            className='navbar__link'
                        >
                            Accueil
                        </Link>
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
            <div className='navbar__titleprofile'>
                {userProfile ? (
                        <p>
                            Bonjour {userProfile}
                        </p>
                    ) : (
                        ''
                    )
                }
            </div>
        </div>
    )
}

export default NavBar; 