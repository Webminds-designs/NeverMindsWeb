import { uploadFile } from "../Controllers/UploadController.js";
import express from 'express';
import upload from "../middleware/Multr.js";

const uploadRoutes = express.Router();

uploadRoutes.post('/', upload.single('file'), uploadFile);

export default uploadRoutes;