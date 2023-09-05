import React, { useEffect, useState } from 'react'; 
import instance from "../../axios.js";

import logoSE from "../../assets/images/logoSE.png";

import './solutions.css'; 

function Solutions () {

    // stock les données récupérées depuis le backend
    const [products, setProducts] = useState([]);
    console.log("img", products);

    const [currIndex, setCurrIndex] = useState(0);
    console.log("currIndex", currIndex);

    // me permet d'effectuer une requête HTTP vers mon back
    // lors du chargement de mon composant
    useEffect(() => {
        // Fonction asynchrone pour récupérer les produits
        const fetchProducts = async () => {
            try {
                // Effectue une requête à l'API back pour obtenir les produits
                const response = await instance.get(`/product`);

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

    const prevStep = () => {
        // Vérifie si l'indice actuel est déjà à zéro
        if(currIndex === 0) {
            // Si c'est le cas, on déplace l'indice vers le dernier élément du tableau
            setCurrIndex(products.length - 1)
        } else {
            // Sinon, on décrémente  l'indice de 1 pour passer à l'élément précédent
            setCurrIndex(currIndex - 1);
        }
    }

    const nextStep = () => {
        // Vérifie si l'indice actuel est déjà à la fin du tableau
        if (currIndex === products.length - 1) {
            // Si c'est le cas, on revient au premier élément en mettant à jour l'indice à zéro
          setCurrIndex(0);
        } else {
            // Sinon, on incrémente simplement l'indice de 1 pour passer à l'élément suivant
          setCurrIndex(currIndex + 1);
        }
    };

    return (
        <div className='solutions'>
            <div className='solutions__container'>
                <h1 className='solutions__title'>Nos Solutions</h1>
                    {products && (
                        <div className='solutions__content'>
                            <img 
                                // src={products[currIndex]?.product_img}
                                src={logoSE} 
                                alt="produit"
                                className='solutions__img'
                            />
                            <button 
                                className="slider__left" 
                                onClick={prevStep}
                            >
                                ❮
                            </button>
                            <button 
                                className="slider__right" 
                                onClick={nextStep}
                            >
                                ❯
                            </button>
                            <div className='solutions__info'>
                                <h2 
                                    className='solutions__name'
                                >
                                    {products[currIndex]?.product_name}
                                </h2>
                                <p 
                                    className='solutions__description'
                                >
                                    {products[currIndex]?.product_description}
                                </p>
                                <p 
                                    className='solutions__price'
                                >
                                    {products[currIndex]?.product_price} €
                                </p>
                                <a 
                                    className='solutions__btn'
                                    href="#contact-form"
                                >
                                Se renseigner
                                </a>
                            </div>
                        </div>
                    )}
                    <div className='solutions__infos'>
                        <h3 className='solutions__order'>Voir vos commandes</h3>
                        <span className='solutions__access'>Accéder à toutes vos commandes en cliquant <a href="#">ici</a></span>
                    </div>
                    <p className='solutions__ask'>
                        Des questions concernant les produits ou désirez-vous passer commande ? 
                        N'hésitez pas à nous contacter !
                    </p>
                    <div id="contact-form" className="solutions__contact">
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