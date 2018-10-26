/**
 * Model Exam: Student
 * */

module.exports = (sequelize, DataTypes) =>{
  return sequelize.define('student',{
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