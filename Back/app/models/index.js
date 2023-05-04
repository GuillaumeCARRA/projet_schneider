import DocumentationCategory from "./documentationCategory.js";
import DocumentationFile from "./documentationFile.js"; 
import DownloadCategory from "./downloadCategory.js";
import DownloadFile from "./downloadFile.js"; 
import FaqAnswer from "./faqAnswer.js"; 
import FaqAsk from "./faqAsk.js"; 
import FaqCategory from "./faqCategory.js"; 
import OrderHistory from "./orderHistory.js";
import Product from "./product.js";
import ProductOrder from "./productOrder.js";
//import Role from "./role.js";


/** START RELATION 1N - 11 */

// une question a plusieurs réponse (n) => hasMany
// 1er argument : le modèle à lier
// 2ème argument : objet de configuration
FaqAsk.hasMany(FaqAnswer, {
    // la clé étrangère qui doit se trouver dans FaqAnswer
    foreignKey: 'faq_ask_id',
    // le nom que nous voulons donner aux réponses dans les questions si nous faisons une jointure
    as: 'answers'
}); 

// une réponse a seulement une question (1) => belongsTo
FaqAnswer.belongsTo(FaqAsk, {
    foreignKey: 'faq_ask_id', 

    as: 'asks'
}); 

Product.hasMany(ProductOrder, {
    foreignKey:'product_id', 

    as: 'orders'
});

ProductOrder.belongsTo(Product, {
    foreignKey: 'product_id', 

    as: 'products'
});

ProductOrder.hasMany(OrderHistory, {
    foreignKey: 'product_order_id', 

    as: 'histories'
});

OrderHistory.belongsTo(ProductOrder, {
    foreignKey: 'product_order_id', 

    as: 'orders'
}); 

/** END RELATION 1N - 11 */