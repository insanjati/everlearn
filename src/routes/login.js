const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Student = require('../models/Student')
const Mentor = require('../models/Mentor')
const Login = require('../models/Login')

router.post('/student', (req, res, next) => {
    Student.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user) {
          return res.status(200).json({
              fullName: user.fullname
          });
          // return res.status(200).json({
          //   message: "Auth failed"
          // });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
    // Student.find({ email: req.body.email }, (err, user) => {
    //     if (err) {
    //         res.json({
    //             message: 'user not found'
    //         });
    //     } else {
    //         res.status(200).json({
    //             email: user.email,
    //             password: user.pass
    //         });
    //     }
    // })
});

router.post('/mentor', (req, res, next) => {
  const email = req.body.email;
  Mentor.findOne({ email: email })
    .select('email hashedPassword')
    .then(user => {
      if (!user) {
        return res.status(404).json({ 
          message: "No valid entry found for provided email" 
        });
      }
      res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
