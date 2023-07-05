import React, { useEffect, useState } from 'react';
import instance from "../../axios.js"

import './solutions.css'; 

function Solutions () {

    // stock les données récupérées depuis le backend
    const [products, setProducts] = useState([]);
    console.log("products", products);

    // me permet d'effectuer une requête HTTP vers mon back
    // lors du chargement de mon composant
    useEffect(() => {
        // Fonction asynchrone pour récupérer les produits
        const fetchProducts = async () => {
            try {
                // Effectue une requête à l'API back pour obtenir les produits
                const response = await instance.get('/product');
                console.log("response", response.data.data);

                // Met à jour l'état "products" avec les données reçues
                setProducts(response.data.data[0]);
            } catch (error) {
                console.log("err", error);
            }
        }

        // Appel de la fonction fetchProducts une fois au chargement initial du composant
        // en passant un tableau vide de dépendances
        // (ce qui signifie que le useEffect s'exécute uniquement lors du montage initial --> chargement de la page)
        fetchProducts();
    }, []); 


    return (
        <div className='solutions'>
            <div className='solutions__container'>
                <h1 className='solutions__title'>Nos Solutions</h1>
                    {/* {products.map((product) => (
                        <div>
                        <img src={product.product_img} alt="photo produit"/>
                            <li key={product.id}>
                                <p>{product.product_name}</p>
                                <p>{product.product_description}</p>
                                <p>{product.product_price}</p>
                            </li>
                        </div>
                    ))} */}
                    {products && (
                        <div className='solutions__content'>
                            <img 
                                src={products.product_img} 
                                alt="produit"
                                className='solutions__img'
                            />
                            <div className='solutions__info'>
                                <p 
                                    className='solutions__name'
                                >
                                    {products.product_name}
                                </p>
                                <p 
                                    className='solutions__description'
                                >
                                    {products.product_description}
                                </p>
                                <p 
                                    className='solutions__price'
                                >
                                    {products.product_price}
                                </p>
                            </div>
                            <button 
                                className='solutions__btn'
                            >
                                commander
                            </button>
                        </div>
                    )}
                    <h3 className='solutions__order'>Voir vos commandes</h3>
                    <span className='solutions__access'>Accéder à toutes vos commandes en cliquant ici</span>
                    <p className='solutions__ask'>
                        Des questions concernant les produits ou désirez-vous passer commande ? 
                        N'hésitez pas à nous contacter !
                    </p>
                        <div className="solutions__contact">
                            <form className="solutions__form">
                                <div className='form-row'>
                                    <div className="floating-label-group">
                                        <input type="text" id="last_name" className="form-control" required />
                                        <label className="floating-label">Nom</label>
                                    </div>
                                    <div className="floating-label-group">
                                        <input type="text" id="first_name" className="form-control" required />
                                        <label className="floating-label">Prénom</label>
                                    </div>
                                </div>

                                <div className='form-row'>
                                    <div className="floating-label-group">
                                        <input type="text" id="objet" className="form-control"  required />
                                        <label className="floating-label">Objet</label>
                                    </div>
                                    <div className="floating-label-group">
                                        <input type="email" id="email" className="form-control" required />
                                        <label className="floating-label">Email</label>
                                    </div>
                                </div>

                                <div className="floating-label-group">
                                    <textarea 
                                        rows="7"
                                        required
                                    />
                                    <label className="floating-label">Votre Message</label>
                                </div>
                                

                                <button className='solutions__send'>Envoyer</button>
                            </form>
                        </div>
            </div>
        </div>
    )
}

export default Solutions;