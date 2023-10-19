import {medicalAttention} from '../model/medicalAttentionModel.js'

export const createMedicalAttention = async (req, res) =>{
    let response = {
        msg:'attention creation',
        error: null,
        data: null
    };

    const date = req.body.date;
    const time = req.body.time;
    const box_number = req.body.box_number;    

    if(date && time && box_number){

        const attention = new medicalAttention(null, date, time, box_number)
        console.log('attention: ', attention)
        const model_result = await attention.createMedicalAttention();
        console.log(model_result)
        if(model_result != null) response.data = model_result;
        else response.error = 'Error trying to create attention'

    } else {
        response.error = "Missing required parameters";
    }
    res.send(response);
};



