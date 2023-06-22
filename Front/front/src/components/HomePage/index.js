import React, {useState} from 'react';

import image from "../../assets/images/logoSE.png"
import se from "../../assets/images/Schneider_Electric.jpg"

import './homepage.css'; 

function HomePage() {

        const [askOpen, setAskOpen] = useState([]);
      
        const toggleAsk = (index) => {
          const updatedAsksOpen = [...askOpen];
          updatedAsksOpen[index] = !updatedAsksOpen[index];
          setAskOpen(updatedAsksOpen);
        };

        const asks = [
            { asking: 'Question 1', answer: 'Réponse à la question 1' },
            { asking: 'Question 2', answer: 'Réponse à la question 2' },
            { asking: 'Question 3', answer: 'Réponse à la question 3' },
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
                <h2 className='homepage__news__title'>Nouveautés</h2>
                <div className='homepage__news__items'>
                    <div className='homepage__news__item'>
                    <img 
                        src={image}
                        alt="" 
                        className='homepage__news__picture'
                    />
                    <span 
                        className='homepage__news__desc'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    </div>
                    <div className='homepage__news__item'>
                    <img 
                        src={image}
                        alt="" 
                        className='homepage__news__picture'
                    />
                    <span 
                        className='homepage__news__desc'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    </div>
                    <div className='homepage__news__item'>
                    <img 
                        src={image}
                        alt="" 
                        className='homepage__news__picture'
                    />
                    <span 
                        className='homepage__news__desc'
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
                         className='homepage__use__picture'
                    />
                    <div 
                        className='homepage__use__content'
                    >
                        <h2
                        className='homepage__use__title'
                        >
                            Utilisation
                        </h2>
                        <p 
                            className='homepage__use__desc'
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

                {/* HOMEPAGE FAQ START */}
                <div className='homepage__faq'>
                    <h2 className='homepage__faq__title'>Question les plus fréquentes</h2>
                        {
                            asks.map((ask, index) => (
                                <div className='homepage__faq__ask'> 
                                    <h3 onClick={() => toggleAsk(index)}>{ask.asking}</h3>
                                    {askOpen[index] && <p>{ask.answer}</p>}
                                </div>
                            ))
                        }
                </div>
                {/* HOMEPAGE FAQ END */}
           </div>
        </div>
    )
}

export default HomePage; 