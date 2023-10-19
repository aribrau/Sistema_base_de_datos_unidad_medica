import Sequelize from 'sequelize'
import db from '../utils/db.js'


class medicalAttention {

    constructor(id_attention, date, time, box_number){
        this.id_attention = id_attention;
        this.date = date;
        this.time = time;
        this.box_number = box_number; 
    }
    createMedicalAttention = async () =>{
        try {
            await medicalAttentionModel.sync();
            const medicalAttention_created =  await medicalAttentionModel.create(this);
            if(medicalAttention_created) return medicalAttention_created.dataValues;
            else return false;
        } catch (error) {
            console.log('create medical attention error: ', error);
        }
    };
    getAllMedicalAttentions = async () =>{
        try {
            await medicalAttentionModel.sync();
            return await medicalAttentionModel.findAll({where:{id_state: 1}});
        } catch (error) {
            console.log('getall medical attention error: ', error)
        }
    }
    updateMedicalAttention = async () =>{
        try {
            await medicalAttentionModel.sync();
            
            const medicalAttention_updated =  await medicalAttentionModel.update(this,{where:{id:this.id}});
            if(medicalAttention_updated.length > 0) return true;
            else return false;

        } catch (error) {
            console.log('update medical attention error: ', error);
        }
    }
    deleteMedicalAttention = async () =>{
            try {
                await medicalAttentionModel.sync();
                console.log('id',this);
                const medicalAttention_deleted = await medicalAttentionModel.destroy({where:{id:this.id}});
                if(medicalAttention_deleted > 0) return true;
                else return false;
            } catch (error) {
                console.log('delete medical attention error: ', error);
            }
        };
}
const medicalAttentionModel = db.define('Medical Attention', {
    id_attention:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    date:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    time: {
        type:Sequelize.STRING,
        allowNull: false,
    },
    box_number:{
        type:Sequelize.INTEGER,
        allowNull: false,
    }   
});

export {medicalAttention};