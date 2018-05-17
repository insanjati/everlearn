const { 
    admin: Admin,
    mentors: Mentor,
    students: Student
  } = require('../models');
  
  module.exports = {
    // // mentors CRUD
    async getMentors (req, res) {
      try {
        const mentors = await Mentor.findAll();
        if (mentors.length < 1) {
          return res.status(404).json({
            message: 'You have no mentor'
          })
        }
        res.status(200).json({
          message: 'Here\'s all the mentors we have for you',
          total: mentors.length,
          mentors
        });
      } catch (err) {
        return res.status(400).json({
          error: err.message
        });
      }
    },
    // students CRUD
    async getStudents (req, res) {
      try {
        const students = await Student.findAll();
        if (students.length < 1) {
          return res.status(404).json({
            message: 'You have no student'
          })
        }
        res.status(200).json({
          message: 'Here\'s all the students we have for you',
          total: students.length,
          students
        });
      } catch (err) {
        return res.status(400).json({
            error: err.message
        });
      }
    }
  }