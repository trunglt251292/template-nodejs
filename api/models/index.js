import Sequelize from 'sequelize';
import config from '../config';
import StudentModel from './student';
import SubjectModel from './subject';
import Student_SubjectModel from './student_subject';

const sequelize = new Sequelize(config.pgURL,config.Sequelize);

const Student = StudentModel(sequelize,Sequelize);
const Subject = SubjectModel(sequelize,Sequelize);
const Student_Subject = Student_SubjectModel(sequelize, Sequelize);

Subject.belongsToMany(Student, {through: Student_Subject, unique:false});
Student.belongsToMany(Subject, {through: Student_Subject, unique:false});

sequelize.sync({force:true})
  .then(()=>{
    console.log(`Database created!`)
  });

module.exports = {
  Student,
  Subject
};