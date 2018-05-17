const { 
  students: Student,
  mentors: Mentor,
  admin: Admin
} = require('../models');
const config = require('../config/default.json');
const { JWT_SECRET } = require('../config');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

signToken = (user) => {
  return JWT.sign({
    iss: 'Everlearn',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 3)
  }, JWT_SECRET);
}

module.exports = {
  // register mentor and student
  async regMentor (req, res) {
    let { email, password } = req.body;
    try {
      let mentor = await Mentor.findOne({ where: { email: email } })
      if (mentor) {
        return res.status(409).json({
          message: 'Email already in used, please use another one'
        })
      }
      await bcrypt.hash(password, 10, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        // const token = signToken(mentor);
        mentor = Mentor.create({ email: email, password: result });
        // console.log(mentor);
        return res.status(201).json({
          message: 'Mentor profile created successfully',
          // token: token,
          request: {
            type: 'GET',
            url: 'http://localhost:8081/login'
          }
        });
      });
      // synchronous hash
      // password = bcrypt.hashSync(password, 10);
      // console.log(password);
      // mentor = await Mentor.create({ email: email, password: password });
      // return res.status(201).json({
      //   message: 'Mentor profile created successfully',
      //   mentor,
      //   request: {
      //     type: 'GET',
      //     url: 'http://localhost:8081/login'
      //   }
      // });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async regStudent (req, res) {
    let { email, password } = req.body;
    try {
      let student = await Student.findOne({ where: { email: email } })
      if (student) {
        return res.status(409).json({
          message: 'Email already in used, please use another one'
        })
      }
      await bcrypt.hash(password, 10, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        // const token = signToken(mentor);
        student = Student.create({ email: email, password: result });
        console.log(student);
        return res.status(201).json({
          message: 'Student profile created successfully',
          // token: token,
          request: {
            type: 'GET',
            url: 'http://localhost:8081/login'
          }
        });
      });
      // synchronous hash
      // password = bcrypt.hashSync(password, 10);
      // student = await Student.create({ email: email, password: password });
      // return res.status(201).json({
      //   message: 'Student profile created successfully',
      //   student,
      //   request: {
      //     type: 'GET',
      //     url: 'http://localhost:8081/login'
      //   }
      // });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  // register mentor and student
  async logInMentor (req, res) {
    let { email, password } = req.body;
    try {
      const mentor = await Mentor.findOne({ where: { email: email } });
      if (!mentor) {
        return res.status(401).json({
          message: 'Authentication failed, please check your login information'
        });
      }
      bcrypt.compare(password, mentor.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Authentication failed, please check your login information'
          });
        }
        if (result) {
          const token = signToken(mentor);
          console.log(token);
          return res.status(200).json({
            message: 'Authentication successfull, welcome again!',
            token: token
          });
        }
        res.status(401).json({
          message: 'Authentication failed, please check your login information'
        });
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async logInStudent (req, res) {
    let { email, password } = req.body;
    try {
      const student = await Student.findOne({ where: { email: email } });
      if (!student) {
        return res.status(401).json({
          message: "Authentication failed, please check your login information"
        });
      }
      bcrypt.compare(password, student.password), (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Authentication failed, please check your login information'
          });
        }
        if (result) {
          const token = signToken(student);
          console.log(token);
          return res.status(200).json({
            message: 'Authentication successfull, welcome again!',
            token: token
          });
        }
        res.status(401).json({
          message: 'Authentication failed, please check your login information'
        });
      }
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  // ADMIN AUTH
  // sync regAdmin (req, res) {
  //   let { email, password } = req.body;
  //   try {
  //     let admin = await Admin.findOne({ where: { email: email } })
  //     if (admin) {
  //       return res.status(409).json({
  //         message: 'Email already in used, please use another one'
  //       })
  //     }
  //     await bcrypt.hash(password, 10, (err, result) => {
  //       if (err) {
  //         return res.status(401).json({
  //           message: "Auth failed"
  //         });
  //       }
  //       admin = Admin.create({ email: email, password: result });
  //       return res.status(201).json({
  //         message: 'Admin profile created successfully',
  //         request: {
  //           type: 'GET',
  //           url: 'http://localhost:8081/login'
  //         }
  //       });
  //     });
  //   } catch (err) {
  //     return res.status(400).json({
  //       error: err.message
  //     });
  //   }
  // }
  async logInAdmin (req, res) {
    let { email, password } = req.body;
    try {
      const admin = await Admin.findOne({ where: { email: email } });
      if (!admin) {
        return res.status(401).json({
          message: "Authentication failed, please check your login information"
        });
      }
      bcrypt.compare(password, admin.password), (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Authentication failed, please check your login information'
          });
        }
        if (result) {
          const token = signToken(admin);
          console.log(token);
          return res.status(200).json({
            message: 'Authentication successfull, welcome again!',
            token: token
          });
        }
        res.status(401).json({
          message: 'Authentication failed, please check your login information'
        });
      }
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}