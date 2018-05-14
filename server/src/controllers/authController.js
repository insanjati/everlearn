const { 
  students: Student,
  mentors: Mentor
} = require('../models');

module.exports = {
  // register mentor and student
  async regMentor (req, res) {
    const content = req.body;
    try {
      const mentor = await Mentor.create(content);
      return res.status(201).json({
        message: 'Mentor profile created successfully',
        mentor,
        request: {
          type: 'GET',
          url: 'http://localhost:8000/login'
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async regStudent (req, res) {
    const content = req.body;
    try {
      const student = await Student.create(content);
      return res.status(201).json({
        message: 'Student profile created successfully',
        student,
        request: {
          type: 'GET',
          url: 'http://localhost:8000/login'
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  // register mentor and student
  async logInMentor (req, res) {
    // const content = req.body;
    try {
      const mentor = await Mentor.findOne({ where: {
        email: req.body.email,
        password: req.body.password
      }});
      if (!mentor) {
        return res.status(401).json({
          message: "Authentication failed, please check you login information again"
        });
      }
      return res.status(200).json({
        message: 'Authentication successfull, welcome again!',
        mentor,
        request: {
          type: 'GET',
          url: 'http://localhost:8000/mentor/' + mentor.id + '/profile'
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async logInStudent (req, res) {
    // const content = req.body;
    try {
      const student = await Student.findOne({ where: {
        email: req.body.email,
        password: req.body.password
      }});
      if (!student) {
        return res.status(401).json({
          message: "Authentication failed, please check you login information again"
        });
      }
      return res.status(200).json({
        message: 'Authentication successfull, welcome again!',
        student,
        request: {
          type: 'GET',
          url: 'http://localhost:8000/student/' + student.id + '/profile'
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
}