import Sequelize from 'sequelize'
import db from '../utils/db.js'


class medicalLicense {

    constructor(id_license, diagnosis, start_date, end_date){
        this.id_license = id_license;
        this.diagnosis = diagnosis;
        this.start_date = start_date;
        this.end_date = end_date; 
    }
    createMedicalLicense = async () =>{
        try {
            await medicalLicenseModel.sync();
            const medicalLicense_created =  await medicalLicenseModel.create(this);
            if(medicalLicense_created) return medicalLicense_created.dataValues;
            else return false;
        } catch (error) {
            console.log('create medical license error: ', error);
        }
    };
    getAllMedicalLicenses = async () =>{
        try {
            await medicalLicenseModel.sync();
            return await mmedicalLicenseModel.findAll({where:{id_state: 1}});
        } catch (error) {
            console.log('getall medical license error: ', error)
        }
    }
    updatemedicalLicense = async () =>{
        try {
            await medicalLicenseModel.sync();
            
            const medicalLicense_updated =  await medicalLicenseModel.update(this,{where:{id:this.id}});
            if(medicalLicense_updated.length > 0) return true;
            else return false;

        } catch (error) {
            console.log('update medical license error: ', error);
        }
    }
    deletemedicalLicense = async () =>{
            try {
                await medicalLicenseModel.sync();
                console.log('id',this);
                const medicalLicense_deleted = await medicalLicenseModel.destroy({where:{id:this.id}});
                if(medicalLicense_deleted > 0) return true;
                else return false;
            } catch (error) {
                console.log('delete medical license error: ', error);
            }
        };
}
const medicalLicenseModel = db.define('Medical License', {
    id_license:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    diagnosis:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    start_date: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    end_date:{
        type:Sequelize.STRING,
        allowNull: false,
    }   
});

export {medicalLicense};