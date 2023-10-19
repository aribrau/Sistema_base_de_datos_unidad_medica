import express from 'express';
import doctorRoutes from './doctorRoutes.js';
import patientRoutes from './patientRoutes.js';
import medicalAttentionRoutes from './medicalAttentionRoutes.js';
import medicalLicenseRoutes from './medicalLicenseRoutes.js';

const router = express.Router();

router.use('/doctor', doctorRoutes);
router.use('/patient', patientRoutes);
router.use('/attention', medicalAttentionRoutes);
router.use('/license', medicalLicenseRoutes);

export default router;