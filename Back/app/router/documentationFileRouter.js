import express from "express"; 

import documentationFileController from "../controller/documentationFileController.js";


const router = express.Router(); 

router.get('/', documentationFileController.getAllDocumentationFiles);
router.get('/:id(\\d+)', documentationFileController.getOneDocumentationFile);
router.post('/', documentationFileController.createDocumentationFile);
router.patch('/:id(\\d+)', documentationFileController.updateDocumentationFile);
router.delete('/:id(\\d+)', documentationFileController.deleteDocumentationFile);

router.patch('/:docId/doc/:catId', documentationFileController.associateCategory);
router.delete('/:docId/doc/:catId', documentationFileController.dissociateCategory);



export default router; 