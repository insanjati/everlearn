const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require('../models/Student')
const Mentor = require('../models/Mentor')

module.exports = {
    // Student: GET, GET by id, DELETE
    get_studentsAll (req, res, next) {
        Student.find()
            .exec()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    get_studentsById (req, res, next) {
        const studentId = req.params.studentId;
        Student.findOne({ _id: studentId})
            .then(result => {
                if (!result) {
                    return res.status(404).json({ 
                        message: "No valid student profile found"
                    });
                }
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    delete_student (req, res, next) {
        const studentId = req.params.studentId;
        Student.remove({ _id: studentId })
            .exec()
            .then(result => {
                if (result.length < 1) {
                    return res.status(404).json({ 
                        message: "Student not found"
                    });
                }
                res.status(200).json({
                    message: 'Student deleted successfully',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/admin/students'
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    // Mentor: GET, GET by id, DELETE
    get_mentorsAll (req, res, next) {
        Mentor.find()
            .exec()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    get_mentorById (req, res, next) {
        const mentorId = req.params.mentorId;
        Mentor.findOne({ _id: mentorId})
            .then(result => {
                if (!result) {
                    return res.status(404).json({ 
                        message: "No valid student profile found"
                    });
                }
                res.status(200).json(result);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    delete_mentor (req, res, next) {
        const mentorId = req.params.mentorId;
        Mentor.remove({ _id: mentorId })
            .exec()
            .then(result => {
                if (result.length < 1) {
                    return res.status(404).json({ 
                        message: "Mentor not found"
                    });
                }
                res.status(200).json({
                    message: 'Mentor deleted successfully',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/admin/mentors'
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }
}