const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require('../models/Student')
const Mentor = require('../models/Mentor')
const Login = require('../models/Login')

module.exports = {
    // Register controller
    reg_student(req, res) {
        // console.log(req.body);
        // res.send(req.body.fullname);
        Student.find({ email: req.body.email })
            .exec()
            .then(student => {
                if (student.length >= 1) {
                    return res.status(409).json({
                        message: "Mail exists"
                    });
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hashed) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            });
                        } else {
                            const student = new Student({
                                email: req.body.email,
                                password: hashed
                            });
                            student
                                .save()
                                .then(result => {
                                    res.status(201).json({
                                        message: "Student account created",
                                        result
                                    });
                                })
                                .catch(err => {
                                    console.log(err),
                                    res.status(500).json({
                                        error: err
                                    });
                                });
                        }
                    })
                }
            });
    },
    reg_mentor (req, res) {
        Mentor.find({ email: req.body.email })
        .exec()
        .then(mentor => {
            if (mentor.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hashed) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const mentor = new Mentor({
                            email: req.body.email,
                            password: hashed
                        });
                        mentor
                            .save()
                            .then(result => {
                                res.status(201).json({
                                    message: "Mentor account created",
                                    result
                                });
                            })
                            .catch(err => {
                                console.log(err),
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                })
            }
        });
    },
    // Login controller
    login_student (req, res) {
        Student.find({ email: req.body.email })
            .exec()
            .then(student => {
                if (student.length < 1) {
                    return res.status(401).json({
                        message: "Authentication failed"
                    });
                }
                bcrypt.compare(req.body.password, student[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Authentication failed"
                        });
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: student[0].email,
                            studentId: student[0]._id
                        }, 'secret', { expiresIn: '1h' });
                        return res.status(200).json({
                            message: "Authentication successful",
                            token: token
                        });
                    }
                    res.status(401).json({
                        message: "Authentication failed"
                    });
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    login_mentor (req, res) {
        Mentor.find({ email: req.body.email })
            .exec()
            .then(mentor => {
                if (mentor.length < 1) {
                    return res.status(401).json({
                        message: "Authentication failed"
                    });
                }
                bcrypt.compare(req.body.password, mentor[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Authentication failed"
                        });
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: mentor[0].email,
                            mentorId: mentor[0]._id
                        }, 'secret', { expiresIn: '1h' });
                        return res.status(200).json({
                            message: "Authentication successful",
                            token: token
                        });
                    }
                    res.status(401).json({
                        message: "Authentication failed"
                    });
                });
            })
            .catch(err => {
                console.log(err); // HAPUS THIS
                res.status(500).json({
                    error: err
                });
            });
    }
}