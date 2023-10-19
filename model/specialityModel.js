import Sequelize from 'sequelize'
import db from '../utils/db.js'

class Speciality {

    constructor(name, description){
        this.name = name;
        this.description = description
    }
    
    async createSpeciality(){ 
        try {
            await specialityModel.sync();
            const created_speciality = await specialityModel.create(this);
            if(created_speciality){
                console.log('speciality creada: ', created_speciality);
                return created_speciality.dataValues.id_speciality;
            }else{
                return false;
            }
        } catch (error) {
            console.log('insert speciality error: ',error);
        }
    }
}
const specialityModel = db.define('Speciality', {
    id_speciality:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull: true,
    },
    description:{
        type:Sequelize.STRING,
        allowNull: true,
    }
});


export {Speciality, specialityModel};