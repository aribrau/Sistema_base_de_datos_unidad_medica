import {medicalLicense} from '../model/medicalLicenseModel.js';

export const createMedicalLicense = async (req, res) =>{
    let response = {
        msg:'medical license creation',
        error: null,
        data: null
    };

    const diagnosis = req.body.diagnosis;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;    

    if(diagnosis && start_date && end_date){

        const license = new medicalLicense(null, diagnosis, start_date, end_date)
        console.log('license: ', license)
        const model_result = await license.createMedicalLicense();
        console.log(model_result)
        if(model_result != null) response.data = model_result;
        else response.error = 'Error trying to create license'

    } else {
        response.error = "Missing required parameters";
    }
    res.send(response);
};



