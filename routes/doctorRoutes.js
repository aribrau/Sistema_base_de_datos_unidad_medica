import express from 'express';
import {createDoctor} from '../controller/doctorController.js'

const router = express.Router();

router.post('/create-doctor', createDoctor);

export default router;