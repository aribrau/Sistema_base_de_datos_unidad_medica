import express from 'express';
import {createMedicalAttention} from '../controller/medicalAttentionController.js'

const router = express.Router();

router.post('/create-attention', createMedicalAttention);

export default router;