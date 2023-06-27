import React, {useState} from 'react';

//import component
import Footer from '../Footer/index.js'; 

//import images
import image from "../../assets/images/logoSE.png"
import se from "../../assets/images/Schneider_Electric.jpg"

import './homepage.css'; 

function HomePage() {

    //Déclaration de l'état initial pour askOpen à l'aide du hook useState
    const [askOpen, setAskOpen] = useState([]);
      
    //Fonction toggleAsk qui permet de basculer l'état d'ouverture pour un élément donné
    const toggleAsk = (index) => {
        console.log("index", index);
        //Créer une copie du tableau askOpen
        const updatedAsksOpen = [...askOpen];
        //Inverse la valeur d'ouverture pour l'élément à l'index spécifié
        updatedAsksOpen[index] = !updatedAsksOpen[index];
        //Met à jour l'état askOpen avec la nouvelle valeur
        setAskOpen(updatedAsksOpen);
    };

    const asks = [
        { asking: 'Quelles sont les questions les plus fréquentes ?', answer: 'Réponse à la question 1' },
        { asking: 'Quelles sont les questions les plus fréquentes ?', answer: 'Réponse à la question 2' },
        { asking: 'Quelles sont les questions les plus fréquentes ?', answer: 'Réponse à la question 3' },
    ];

    return (
        <div className='homepage'>
           <div className='homepage__container'>
                {/* HOMEPAGE PRESENTATION START */}
                <div className='homepage__presentation'>
                    <img 
                        src={se}
                        alt=""
                        className='homepage__picture'
                    />
                    <div className='homepage__text'>
                        <h2 className='homepage__title'>
                            Nos Solutions
                        </h2>
                        <p className='homepage__solution'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce nunc turpis, bibendum eget nulla non, scelerisque semper nisl. 
                            Ut auctor maximus odio eleifend facilisis. Vestibulum ante ipsum primis in faucibus orci luctus 
                            et ultrices posuere cubilia curae; Cras non gravidaLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce nunc turpis, bibendum eget nulla non, scelerisque semper nisl. Ut auctor maximus odio eleifend facilisis. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras non gravida
                        </p>
                    </div>
                </div>  
                {/* HOMEPAGE PRESENTATION END */}

                {/* HOMEPAGE NEWS START */}
                <div className='homepage__news'>
                <h2 className='homepage__news-title'>Nouveautés</h2>
                <div className='homepage__news-items'>
                    <div className='homepage__news-item'>
                    <img 
                        src={image}
                        alt="" 
                        className='homepage__news-picture'
                    />
                    <span 
                        className='homepage__news-desc'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    </div>
                    <div className='homepage__news-item'>
                    <img 
                        src={image}
                        alt="" 
                        className='homepage__news-picture'
                    />
                    <span 
                        className='homepage__news-desc'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    </div>
                    <div className='homepage__news-item'>
                    <img 
                        src={image}
                        alt="" 
                        className='homepage__news-picture'
                    />
                    <span 
                        className='homepage__news-desc'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    </div>
                </div>
                </div>
                {/* HOMEPAGE NEWS END */}

                {/* HOMEPAGE USE START */}
                <div className='homepage__use'>
                    <img 
                         src={image} 
                         alt="" 
                         className='homepage__use-picture'
                    />
                    <div 
                        className='homepage__use-content'
                    >
                        <h2
                        className='homepage__use-title'
                        >
                            Utilisation
                        </h2>
                        <p 
                            className='homepage__use-desc'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce nunc turpis, bibendum eget nulla non, scelerisque semper nisl. 
                            Ut auctor maximus odio eleifend facilisis. Vestibulum ante ipsum primis in faucibus orci luctus 
                            et ultrices posuere cubilia curae; Cras non gravidaLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce nunc turpis, bibendum eget nulla non, scelerisque semper nisl. Ut auctor maximus odio eleifend facilisis. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras non gravida
                        </p>
                    </div>
                </div>
                {/* HOMEPAGE USE END */}
                <div className='homepage__info'>
                    <div className='homepage__info-content'>
                        <h2 className='homepage__info-title'>Titre</h2>
                        <p className='homepage__info-desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce nunc turpis, bibendum eget nulla non, scelerisque semper nisl. 
                            Ut auctor maximus odio eleifend facilisis. Vestibulum ante ipsum primis in faucibus orci luctus 
                            et ultrices posuere cubilia curae; Cras non gravidaLorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Fusce nunc turpis, bibendum eget nulla non, scelerisque semper nisl. Ut auctor maximus odio eleifend facilisis. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras non gravida
                        </p>
                    </div>
                    <img 
                        src={image} 
                        alt="" 
                        className='homepage__info-picture'
                    />
                </div>
                {/* HOMEPAGE FAQ START */}
                <div className='homepage__faq'>
                    <h2 className='homepage__faq-title'>Question les plus fréquentes</h2>
                        <div className='homepage__faq-content'>
                            {
                                //Boucle map qui itère sur chaque élément du tableau asks
                                asks.map((ask, index) => (
                                    <div 
                                        key={index} 
                                        className='homepage__faq-ask'
                                        onClick={() => toggleAsk(index)}
                                    > 
                                        <h3>{ask.asking}</h3>
                                        {/* Condition qui vérifie si l'élément à l'index spécifié est ouvert (true) ou fermé (false) */}
                                        {/* Si l'élément est ouvert, affiche le paragraphe contenant la réponse ask.answer */}
                                        {askOpen[index] && <p className='homepage__faq-answer'>{ask.answer}</p>}
                                    </div>
                                ))
                            }
                        </div>
                </div>
                {/* HOMEPAGE FAQ END */}
           </div>
           <Footer />
        </div>
    )
}

export default HomePage; 