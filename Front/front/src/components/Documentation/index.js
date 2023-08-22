import React, { useState, useEffect } from 'react'; 
import instance from '../../axios';

import './documentation.css';



function Documentation () {

    const [documentation, setDocumentation] = useState([]);
    console.log('doc', documentation);

    useEffect (() => {
        const fetchDoc = async () => {
            try {
                const response = await instance.get('/documentation-file');

                setDocumentation(response.data.data); 

            } catch (error) {
                console.log("err", error);
            }
        }
        fetchDoc();
    }, []); 

    return (
        <div className='documentation'>
              <div className='documentation__title'>
                <h2 
                  className='documentation__subtitle'
                >
                  Documentation
                </h2>
              </div>
              <div className='documentation__cards'>
               {documentation.map((docs) => (
                    <div className='documentation__card' key={docs.id}>
                      <img
                      src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt='Background'
                      className='documentation-card-image'
                      />
                      <div className='documentation-card-details'>
                        <h3 className='documentation-card-title'>{docs.documentation_file_name}</h3>
                        <span className='documentation-card-num-job'>{docs.documentation_file_size} Mo</span>
                        <button className='documentation-card-btn'>Télécharger</button>
                      </div>
                    </div>
                ))
               } 
              </div>
        </div>
    )
}; 

export default Documentation; 