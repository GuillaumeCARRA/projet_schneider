import React, { useState, useEffect } from 'react';
import instance from '../../axios';

import './faq.css'; 


function Faq () {

    const [asks, setAsks] = useState([]);

    const [askOpen, setAskOpen] = useState([]);

    
    useEffect(() => {
        const fetchAsk = async () => {
            try {
                const response = await instance.get("/faq-ask");

                setAsks(response.data.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchAsk();
    }, []);


    const toggleAsk = (index) => {
        const updatedAsksOpen = [...askOpen];
        updatedAsksOpen[index] = !updatedAsksOpen[index];
        setAskOpen(updatedAsksOpen);
    };


    return (
        <div className='homepage__faq'>
        <h2 className='homepage__faq-title'>Besoin d'aide ?</h2>
        <div className='homepage__faq-content'>
          {asks.map((ask, index) => (
            <div key={index} className='homepage__faq-ask' onClick={() => toggleAsk(index)}> 
              <h3>{ask.ask}</h3>
              {askOpen[index] && (
                <div className='homepage__faq-answers'>
                  {ask.answers.map((answer) => (
                    <p key={answer.id} className='homepage__faq-answer'>
                      {answer.answer}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div> 
    )
}

export default Faq;