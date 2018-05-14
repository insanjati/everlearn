// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { 
  students: Student,
  bookmarks: Bookmark,
  purchases: Purchase
} = require('../models');

module.exports = {
  // Profile: GET and PUT
  async getProfile (req, res) {
    const studentId = req.params.studentId;
    try {
      const student = await Student.findOne({ where: { id: studentId } });
      if (!student) {
        return res.status(404).json({
          message: 'No valid profile found'
        })
      }
      return res.status(200).json({
        message: 'Student profile found',
        student,
        request: {
          type: 'PUT',
          url: 'http://localhost:8000/student/profile/' + studentId
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async putProfile (req, res) {
    const studentId = req.params.studentId;
    const content = req.body;
    console.log(content);
    try {
      const student = await Student.update(content, {
        where : {
          id: studentId
        }
      });
      res.status(200).json({
        message: 'Profile updated successfully',
        student,
        request: {
          type: 'GET',
          url: 'http://localhost:8000/student/profile/' + studentId
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  // Purchase: GET and POST
  async getPurchases (req, res) {
    const studentId = req.params.studentId;
    try {
      const purchases = await Student.findAll({
        include: [{
          model: Course,
          where : {
           id: studentId
          },
        }],
        limit: 10
      });
      res.status(200).json({
        //jumlah courses dulu, ambil length property
        message: 'Here\'s all the courses purchased by student with id: ' + studentId,
        purchases
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async postPurchases (req, res) {
    const studentId = req.params.studentId;
    const purchase = req.body.purchase;
    try {
      const purchases = await Student.update({
        studentPurchasess: purchase
      });
      res.status(200).json({
        message: 'Purchase created successfully',
        student,
        request: {
          type: 'GET',
          url: 'http://localhost:8000/student/profile/' + studentId
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}