import Sequelize from 'sequelize'
import db from '../utils/db.js'
import {specialityModel} from './specialityModel.js';

class Doctor {

    constructor(id_doctor, name, idnumber, adress, id_speciality){
        this.id_doctor = id_doctor;
        this.name = name;
        this.idnumber = idnumber;
        this.adress = adress; 
        this.id_speciality = id_speciality;
    }
    async createDoctor(){
        try {
            await doctorModel.sync();
            const doctor_created =  await doctorModel.create(this);
            if(doctor_created) return doctor_created.dataValues;
            else return false;
        } catch (error) {
            console.log('create doctor error: ', error);
        }
    };
    getAllDoctors = async () =>{
        try {
            await doctorModel.sync();
            return await doctorModel.findAll({where:{id_state: 1}});
        } catch (error) {
            console.log('getalldoctors error: ', error)
        }
    }
    updateDoctor = async () =>{
        try {
            await doctorModel.sync();
            
            const doctor_updated =  await doctorModel.update(this,{where:{id:this.id}});
            if(doctor_updated.length > 0) return true;
            else return false;

        } catch (error) {
            console.log('updatedoctor error: ', error);
        }
    }
    deleteDoctor = async () =>{
            try {
                await doctorModel.sync();
                console.log('id_doctor',this);
                const doctor_deleted = await doctorModel.destroy({where:{id:this.id}});
                if(doctor_deleted > 0) return true;
                else return false;
            } catch (error) {
                console.log('deletedoctor error: ', error);
            }
        };
}
const doctorModel = db.define('Doctor', {
    id_doctor:{
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
    },
    id_speciality:{
        type:Sequelize.INTEGER,
        allowNull: true,
        references:{
            model:'specialities',
            key:'id_speciality'
        }
    },
    
});

specialityModel.hasOne(doctorModel,{
    foreignKey: 'id_speciality',
});

doctorModel.belongsTo(specialityModel,{
    foreignKey: 'id_speciality',
});

export {Doctor};