import React, { useEffect, useState } from 'react';
import instance from "../../axios.js"
import { Link } from 'react-router-dom';

import './solutions.css'; 

function Solutions () {

    // stock les données récupérées depuis le backend
    const [products, setProducts] = useState([]);
    console.log("products", products)

    // me permet d'effectuer une requête HTTP vers mon back
    // lors du chargement de mon composant
    useEffect(() => {
        // Fonction asynchrone pour récupérer les produits
        const fetchProducts = async () => {
            try {
                // Effectue une requête à l'API pour obtenir les produits
                const response = await instance.get('/product');
                console.log("response", response);

                // Met à jour l'état "products" avec les données reçues
                setProducts(response.data.data)
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
            <h1>Nos Solutions</h1>
            <ul>
                {products.map((product) => {
                    console.log("product inside map", product);
                    return (
                        <li key={product.id}>
                            <p>{product.product_name}</p>
                            <p>{product.product_description}</p>
                            <p>{product.product_price}</p>
                            <img src={product.product_img}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Solutions;