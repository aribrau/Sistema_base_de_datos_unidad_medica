//importamos la clase User y sus funciones
import {Doctor} from '../model/doctorModel.js';
import {Speciality} from '../model/specialityModel.js'

export const createDoctor = async (req, res) =>{
    let response = {
        msg:'doctor creation',
        error: null,
        data: null
    };

    const name = req.body.name;
    const idnumber = req.body.idnumber;
    const adress = req.body.adress;    

    if(name && idnumber && adress){

        const speciality = new Speciality();
        const id_speciality = await speciality.createSpeciality();

        const doctor = new Doctor(null, name, idnumber, adress, id_speciality)
        console.log('doctor: ', doctor)
        const model_result = await doctor.createDoctor();
        console.log(model_result)
        if(model_result != null) response.data = model_result;
        else response.error = 'Error trying to create doctor'

    } else {
        response.error = "Missing required parameters";
    }
    res.send(response);
};



