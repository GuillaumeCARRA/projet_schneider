import React, { useState, useEffect } from 'react'; 
import instance from '../../axios';

import './documentation.css';



function Documentation () {

    // Utilisation de useState pour déclarer des états et les fonctions pour les mettre à jour

    // État pour stocker les données de documentation
    const [documentation, setDocumentation] = useState([]);
   
    // État pour stocker le profil de l'utilisateur
    const [userProfile, setUserProfile] = useState('');
   
    // État pour stocker l'ID du document en cours d'édition
    const [editingDocumentId, setEditingDocumentId] = useState(null);
  
    // État pour stocker le nouveau titre saisi par l'utilisateur
    const [newTitle, setNewTitle] = useState('');
    
     // État pour stocker la nouvelle taille saisie par l'utilisateur
    const [newSize, setNewSize] = useState('');
    

    

    useEffect (() => {
        // Fonction asynchrone pour effectuer une requête HTTP pour récupérer les données de documentation
        const fetchDoc = async () => {
          try {

              // Effectue une requête GET à l'API pour obtenir les données de documentation
              const response = await instance.get('/documentation-file');
              
              // Met à jour l'état 'documentation' avec les données récupérées de l'API
              setDocumentation(response.data.data); 

          } catch (error) {
              console.log("err", error);
          }
        };

        const fetchUserProfile = async () => {
          try {
             // Fonction asynchrone pour récupérer le profil de l'utilisateur
              const response = await instance.get('/');

              // Met à jour l'état 'userProfile' avec le profil de l'utilisateur récupéré de l'API
              setUserProfile(response.data.userProfile);
          } catch (error) {
              console.log("err", error);
          }
      };

      fetchDoc();
      fetchUserProfile();
    }, []); // Utilisation des dépendances vides pour que cela ne s'exécute qu'une seule fois


  // Fonction pour gérer la mise à jour des données d'un document
  const handleUpdate = async (id, newData) => {
      try {

         // Vérifie si les champs ne sont pas vides et  supprime les espaces, tabulation, etc.., avec la méthode trim()
        if (newData.newTitle.trim() === '' || newData.newSize.trim() === '') {
            console.log("Les champs ne doivent pas être vides");
            return alert("Les champs ne doivent pas être vides");
        }

          // Effectue une requête PATCH à l'API pour mettre à jour les données du document avec l'ID spécifié
          await instance.patch(`/documentation-file/${id}`, {
            documentation_file_name: newData.newTitle,
            documentation_file_size: newData.newSize
          });
          console.log("newdata handle update", newData);

          // Mis à jour l'état 'documentation' avec les nouvelles données 
          setDocumentation((prevDocumentation) => {
            // Utilisation de setDocumentation pour mettre à jour l'état 'documentation' 
           
            // Méthode map pour parcourir chaque élément de prevDocumentation
            return prevDocumentation.map((doc) => {
                  // Vérifie si l'id de l'élément doc correspond à l'id passé en argument 
                if (doc.id === id) {
                    return {
                        // Si l'id correspond, crée une copie de l'objet doc avec les propriétés existantes
                        // et met à jour les propriétés 'documentation_file_name' et 'documentation_file_size'
                        // avec les nouvelles valeurs provenant de l'argument 'newData'
                        ...doc,
                        documentation_file_name: newData.newTitle,
                        documentation_file_size: newData.newSize
                    };
                }
                // Si l'id ne correspond pas, retourne simplement l'objet doc inchangé
                return doc;
            });
          });


          setEditingDocumentId(id);

          // Réinitialise les états 'newTitle' et 'newSize' à des chaînes vides
          setNewTitle('');
          setNewSize('');
          
      } catch (error) {
          console.log("err", error);
      }
  };


    return (
      <div className='documentation'>
          <div className='documentation__title'>
              <h2 className='documentation__subtitle'>
                  Documentation
              </h2>
          </div>
          <div className='documentation__cards'>
              {documentation.map((docs) => (
                  <div className='documentation__card' key={docs.id}>
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
                        {userProfile === "SESA681854" ? (
                        <div>
                            <button
                                onClick={() => setEditingDocumentId(docs.id)}
                            >
                                Mettre à jour
                            </button>
                            {editingDocumentId === docs.id && (
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nouveau Titre"
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Nouvelle Taille (Mo)"
                                        value={newSize}
                                        onChange={(e) => setNewSize(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleUpdate(docs.id, { newTitle: newTitle, newSize: newSize })}
                                    >
                                        Enregistrer
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : null}
                  </div>
              ))}
              {userProfile !== "SESA681854" ? (
                  <div>
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
                  </div>
              ) : null}
          </div>
      </div>
    );
  }; 



export default Documentation; 