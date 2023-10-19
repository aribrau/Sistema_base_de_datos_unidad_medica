import Sequelize from 'sequelize'
import db from '../utils/db.js'


class Patient {

    constructor(id_patient, name, idnumber, adress){
        this.id_patient = id_patient;
        this.name = name;
        this.idnumber = idnumber;
        this.adress = adress; 
    }
    createPatient = async () =>{
        try {
            await patientModel.sync();
            const patient_created =  await patientModel.create(this);
            if(patient_created) return patient_created.dataValues;
            else return false;
        } catch (error) {
            console.log('create patient error: ', error);
        }
    };
    getAllPatients = async () =>{
        try {
            await patientModel.sync();
            return await patientModel.findAll({where:{id_state: 1}});
        } catch (error) {
            console.log('getallpatient error: ', error)
        }
    }
    updatePatient = async () =>{
        try {
            await patientModel.sync();
            
            const patient_updated =  await patientModel.update(this,{where:{id:this.id}});
            if(patient_updated.length > 0) return true;
            else return false;

        } catch (error) {
            console.log('updatepatient error: ', error);
        }
    }
    deletePatient = async () =>{
            try {
                await patientModel.sync();
                console.log('id',this);
                const patient_deleted = await patientModel.destroy({where:{id:this.id}});
                if(patient_deleted > 0) return true;
                else return false;
            } catch (error) {
                console.log('deletepatient error: ', error);
            }
        };
}
const patientModel = db.define('Patient', {
    id_patient:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    idnumber: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    adress:{
        type:Sequelize.STRING,
        allowNull: false,
    }   
});

export {Patient};