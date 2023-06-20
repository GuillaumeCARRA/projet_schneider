import {} from "../models/index.js";
import DocumentationFile from "../models/documentationFile.js";
import DocumentationCategory from "../models/documentationCategory.js"; 


const getAllDocumentationFiles = async (req, res) => {
    try {
        // Récupérer tous les fichiers de documentation avec leurs catégories associées
        const documentationFiles = await DocumentationFile.findAll({
            include: [
                { association: "categories" }
            ]
        });

        // Renvoyer les fichiers de documentation au format JSON
        res.json({ data: documentationFiles });
    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const getOneDocumentationFile = async (req, res) => {
    try {
        // Récupérer l'ID du fichier de documentation à partir des paramètres de la requête
        const documentationId = req.params.id;

        // Trouver un fichier de documentation avec l'ID spécifié et inclure ses catégories associées
        const oneDocumentation = await DocumentationFile.findOne({
            where: { id: documentationId },
            include: [
                { association: "categories" }
            ]
        });

        // Si aucun fichier de documentation n'est trouvé, renvoyer une erreur HTTP 404
        if (!oneDocumentation) {
            return res.status(404).json({ error: "Pas de documentation avec cet ID" });
        } else {
            // Renvoyer le fichier de documentation trouvé au format JSON
            return res.json({ data: oneDocumentation });
        }
    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const createDocumentationFile = async (req, res) => {
    // Extraire les données du fichier de documentation à partir du corps de la requête
    const documentationFileData = {
        documentation_file_name: req.body.documentation_file_name,
        documentation_file_format: req.body.documentation_file_format,
        documentation_file_img: req.body.documentation_file_img,
        documentation_file_size: req.body.documentation_file_size,
        // documentation_category_id: req.body.documentation_category_id
    }

    try {
        // Créer un nouveau fichier de documentation avec les données spécifiées
        const documentationFile = await DocumentationFile.create(documentationFileData);

        // Renvoyer une réponse avec le fichier de documentation créé et le code HTTP 201
        res.status(201).json(documentationFile);
    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const updateDocumentationFile = async (req, res) => {
    try {
        // Trouver le fichier de documentation à mettre à jour en utilisant l'ID spécifié dans les paramètres de la requête
        const updatedDocumentationFile = await DocumentationFile.findOne({
            where: { id: req.params.id }
        });

        // Si aucun fichier de documentation n'est trouvé, renvoyer une erreur HTTP 404
        if (!updatedDocumentationFile) {
            return res.status(404).json({ error: "Aucun document trouvé" });
        }

        // Extraire les nouvelles données du fichier de documentation à partir du corps de la requête
        const {
            documentation_file_name,
            documentation_file_format,
            documentation_file_img,
            documentation_file_size
        } = req.body;

        // Mettre à jour les propriétés du fichier de documentation si de nouvelles valeurs sont spécifiées
        if (documentation_file_name) {
            updatedDocumentationFile.documentation_file_name = documentation_file_name;
        }
        if (documentation_file_format) {
            updatedDocumentationFile.documentation_file_format = documentation_file_format;
        }
        if (documentation_file_img) {
            updatedDocumentationFile.documentation_file_img = documentation_file_img;
        }
        if (documentation_file_size) {
            updatedDocumentationFile.documentation_file_size = documentation_file_size;
        }

        // Sauvegarder les modifications apportées au fichier de documentation
        await updatedDocumentationFile.save();

        // Renvoyer le fichier de documentation mis à jour au format JSON
        res.json({ data: updatedDocumentationFile });

    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const deleteDocumentationFile = async (req, res) => {
    try {
        // Trouver le fichier de documentation à supprimer en utilisant l'ID spécifié dans les paramètres de la requête
        const deletedDocumentationFile = await DocumentationFile.findOne({
            where: { id: req.params.id }
        });

        // Si aucun fichier de documentation n'est trouvé, renvoyer une erreur HTTP 404
        if (!deletedDocumentationFile) {
            return res.status(404).json({ error: "Aucun document trouvé" });
        }

        // Supprimer le fichier de documentation
        await deletedDocumentationFile.destroy();

        // Renvoyer le fichier de documentation supprimé au format JSON
        res.json({ data: deletedDocumentationFile });

    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const associateCategory = async (req, res) => {
    const documentationId = req.params.docId;
    const categoryId = req.params.catId;

    try {
        // Trouver le fichier de documentation à associer en utilisant l'ID spécifié dans les paramètres de la requête
        const doc = await DocumentationFile.findByPk(documentationId, {
            include: "categories"
        });

        // Trouver la catégorie à associer en utilisant l'ID spécifié dans les paramètres de la requête
        const category = await DocumentationCategory.findByPk(categoryId);

        // Si aucun fichier de documentation n'est trouvé, renvoyer une erreur HTTP 404
        if (!doc) {
            res.status(404).json({
                error: "Pas de documentation avec cet ID"
            });
            return;
        }

        // Si aucune catégorie n'est trouvée, renvoyer une erreur HTTP 404
        if (!category) {
            res.status(404).json({
                error: "Pas de catégorie avec cet ID"
            });
            return;
        }

        // Associer la catégorie au fichier de documentation
        await doc.addCategories(category);

        // Renvoyer le fichier de documentation avec les catégories associées au format JSON
        res.json({ data: doc });

    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

const dissociateCategory = async (req, res) => {
    const documentationId = req.params.docId;
    const categoryId = req.params.catId;

    try {
        // Trouver le fichier de documentation à dissocier en utilisant l'ID spécifié dans les paramètres de la requête
        const doc = await DocumentationFile.findByPk(documentationId);

        // Trouver la catégorie à dissocier en utilisant l'ID spécifié dans les paramètres de la requête
        const category = await DocumentationCategory.findByPk(categoryId);

        // Si aucun fichier de documentation n'est trouvé, renvoyer une erreur HTTP 404
        if (!doc) {
            res.status(404).json({
                error: "Pas de documentation avec cet ID"
            });
            return;
        }

        // Si aucune catégorie n'est trouvée, renvoyer une erreur HTTP 404
        if (!category) {
            res.status(404).json({
                error: "Pas de catégorie avec cet ID"
            });
            return;
        }

        // Dissocier la catégorie du fichier de documentation
        await doc.removeCategories(category);

        // Renvoyer le fichier de documentation avec les catégories associées au format JSON
        res.json({ data: doc });

    } catch (error) {
        console.log(error);
        // Renvoyer une erreur HTTP 500 en cas d'erreur
        res.status(500).json({ error });
    }
}

export default {
    getAllDocumentationFiles,
    getOneDocumentationFile,
    createDocumentationFile,
    updateDocumentationFile,
    deleteDocumentationFile,
    associateCategory,
    dissociateCategory
}
