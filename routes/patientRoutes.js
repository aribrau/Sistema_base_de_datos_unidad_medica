import express from 'express';
import {createPatient} from '../controller/patientController.js'

const router = express.Router();

router.post('/create-patient', createPatient);

export default router;