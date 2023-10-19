import {Patient} from '../model/patientModel.js';

export const createPatient = async (req, res) =>{
    let response = {
        msg:'patient creation',
        error: null,
        data: null
    };

    const name = req.body.name;
    const idnumber = req.body.idnumber;
    const adress = req.body.adress;    

    if(name && idnumber && adress){

        const patient = new Patient(null, name, idnumber, adress)
        console.log('patient: ', patient)
        const model_result = await patient.createPatient();
        console.log(model_result)
        if(model_result != null) response.data = model_result;
        else response.error = 'Error trying to create patient'

    } else {
        response.error = "Missing required parameters";
    }
    res.send(response);
};



