import express from 'express';
import { createMedicalLicense } from '../controller/medicalLicenseController.js';

const router = express.Router();

router.post('/create-license', createMedicalLicense);

export default router;