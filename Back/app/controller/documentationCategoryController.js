import {} from "../models/index.js";
import DocumentationCategory from "../models/documentationCategory.js";


const getAllDocumentationCategories = async (req, res) => {
    try {
        // Récupérer toutes les catégories de documentation avec leurs fichiers associés
        const documentationCategories = await DocumentationCategory.findAll({
            include: [
                { association: "files" }
            ]
        });

        // Renvoyer les catégories de documentation au format JSON
        return res.json({ data: documentationCategories });
    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        return res.status(500).json({ error });
    }
}

const getOneDocumentationCategory = async (req, res) => {
    try {
        const documentationId = req.params.id;

        // Trouver une catégorie de documentation spécifique avec ses fichiers associés en utilisant l'ID spécifié dans les paramètres de la requête
        const oneCategory = await DocumentationCategory.findOne({
            where: ({ id: documentationId }),
            include: [
                { association: "files" }
            ]
        });

        // Si aucune catégorie n'est trouvée, renvoyer une erreur HTTP 404
        if (!oneCategory) {
            return res.status(404).json({ error: "Pas de catégorie avec cet ID" });
        } else {
            // Renvoyer la catégorie de documentation au format JSON
            return res.json({ data: oneCategory });
        }


    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const createDocumentationCategory = async (req, res) => {

    const documentationCategoryData = {
        documentation_category_name: req.body.documentation_category_name
    }

    try {
        // Créer une nouvelle catégorie de documentation avec les données fournies
        const documentationCategory = await DocumentationCategory.create(documentationCategoryData);

        // Renvoyer la catégorie de documentation créée au format JSON
        res.status(201).json(documentationCategory);

    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const updateCategory = async (req, res) => {
    try {
        // Trouver la catégorie de documentation à mettre à jour en utilisant l'ID spécifié dans les paramètres de la requête
        const updatedCategory = await DocumentationCategory.findOne({
            where: { id: req.params.id }
        });

        // Si aucune catégorie n'est trouvée, renvoyer une erreur HTTP 404
        if (!updatedCategory) {
            return res.status(404).json({ error: "Aucune catégorie trouvée" });
        }

        // Récupérer les données de mise à jour de la catégorie à partir du corps de la requête
        const { documentation_category_name } = req.body;

        // Mettre à jour les propriétés de la catégorie si les nouvelles valeurs sont fournies
        if (documentation_category_name) {
            updatedCategory.documentation_category_name = documentation_category_name;
        }

        // Sauvegarder les modifications apportées à la catégorie de documentation
        await updatedCategory.save();

        // Renvoyer la catégorie de documentation mise à jour au format JSON
        res.json({ data: updatedCategory });

    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const deleteCategory = async (req, res) => {
    try {
        // Trouver la catégorie de documentation à supprimer en utilisant l'ID spécifié dans les paramètres de la requête
        const deletedCategory = await DocumentationCategory.findOne({
            where: { id: req.params.id }
        });

        // Si aucune catégorie n'est trouvée, renvoyer une erreur HTTP 404
        if (!deletedCategory) {
            return res.status(404).json({ error: "Aucune catégorie trouvée" });
        }

        // Supprimer la catégorie de documentation de la base de données
        await deletedCategory.destroy();

        // Renvoyer la catégorie de documentation supprimée au format JSON
        res.json({ data: deletedCategory });

    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

export default {
    getAllDocumentationCategories,
    getOneDocumentationCategory,
    createDocumentationCategory,
    updateCategory,
    deleteCategory
}
