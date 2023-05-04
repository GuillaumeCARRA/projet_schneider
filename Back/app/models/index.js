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


/** START RELATION N - N */
DocumentationFile.belongsToMany(DocumentationCategory, {
    // le nom de la table de liaison
    through: "documentation_file_category",

    // le nom de la clef qui correspond à DocumentationFile
    foreignKey: "documentation_file_id",

    // le nom de la clef qui correspond à DocumentationCategory
    otherKey: "documentation_category_id",

    // l'alias de l'association
    as: "categories"
});

DocumentationCategory.belongsToMany(DocumentationFile, {
    // le nom de la table de liaison
    through: "documentation_file_category",

    // le nom de la clef qui correspond à DocumentationFile
    foreignKey: "documentation_category_id",

    // le nom de la clef qui correspond à DocumentationCategory
    otherKey: "documentation_file_id",

    // l'alias de l'association
    as: "files"
});

DownloadFile.belongsToMany(DownloadCategory, {
    through: "download_file_category",

    foreignKey: "download_file_id",

    otherKey: "download_category_id", 

    as: "dlCategories"
});

DownloadCategory.belongsToMany(DownloadFile, {
    through: "download_file_category",

    foreignKey: "download_category_id",

    otherKey: "download_file_id", 

    as: "dlFiles"

});

FaqCategory.belongsToMany(FaqAsk, {
    through: "faq_ask_category",

    foreignKey: "faq_category_id",

    otherKey: "faq_ask_id", 

    as: "asks"
});

FaqAsk.belongsToMany(FaqCategory, {
    through: "faq_ask_category",

    foreignKey: "faq_ask_id",

    otherKey: "faq_category_id", 

    as: "faqCategories"
});

/** END RELATION N - N */

export default {
    FaqAsk, 
    FaqAnswer, 
    Product, 
    ProductOrder, 
    OrderHistory, 
    DocumentationFile, 
    DocumentationCategory, 
    DownloadFile, 
    DownloadCategory, 
    FaqCategory
};