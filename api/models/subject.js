/**
 * Model Exam: Subject
 * */

module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('subject',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username:{
      type: DataTypes.STRING
    }
  })
};