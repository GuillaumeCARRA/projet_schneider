import express from "express"; 

import downloadFileController from '../controller/downloadFileController.js';

const router = express.Router(); 

router.get('/', downloadFileController.getAllDownloadFiles);
router.get('/:id(\\d+)', downloadFileController.getOneDownloadFile);
router.post('/', downloadFileController.createDownloadFile);
router.patch('/:id(\\d+)', downloadFileController.updateDownloadFile);
router.delete('/:id(\\d+)', downloadFileController.deleteDownloadFile);

router.patch('/:dlId/download/:catDlId', downloadFileController.associateDlCategory);
router.delete('/:dlId/download/:catDlId', downloadFileController.dissociateDlCategory);



export default router; 