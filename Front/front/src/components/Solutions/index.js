import React, { useEffect, useState } from 'react';
import instance from "../../axios.js"
// import { Link } from 'react-router-dom';

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
                                alt="photo produit"
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
            </div>
        </div>
    )
}

export default Solutions;