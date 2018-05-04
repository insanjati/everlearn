const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Mentor = require('../models/Mentor')
const Course = require('../models/Course')

module.exports = {
    // Profile: GET and PUT
    get_profile (req, res, next) {
        const mentorId = req.params.mentorId;
        Mentor.findOne({ _id: mentorId})
            .then(result => {
                if (!result) {
                    return res.status(404).json({ 
                        message: "No valid profile found"
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
    put_profile (req, res, next) {
        const mentorId = req.params.mentorId;
        const content = req.body;
        console.log(content); // NGGAK KE-PARSE?
        Mentor.update({ _id: mentorId }, content)
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Profile successfully updated',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/mentor/' + mentorId + '/profile'
                    }
                })
            })
    },
    // Course: GET, GET by ID, PUT, DELETE, POST
    get_coursesAll (req, res, next) {
        const mentorId = req.params.mentorId;
        Course.find(function(err, course){
            if(err) return next(err);
            res.status(200).json(course);
        })
    },
    get_courseById (req, res, next) {
        const mentorId = req.params.mentorId;
        const courseId = req.params.courseId;
        Course.findOne({ _id: courseId})
            .then(result => {
                if (!result) {
                    return res.status(404).json({ 
                      message: "No valid course found"
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
    put_course (req, res, next) {
        const mentorId = req.params.mentorId;
        const courseId = req.params.courseId;
        const content = req.body;
        Course.update({ _id: courseId }, content)
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Course successfully updated',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/mentor/' + mentorId + '/courses/' + courseId
                    }
                })
            })
    },
    delete_course (req, res, next) {
        const mentorId = req.params.mentorId;
        const courseId = req.params.courseId;
        Course.remove({ _id: courseId })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Course successfully deleted',
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    post_course (req, res, next) {
        console.log(req.file);
        const course = new Course({
            mentor: req.params.mentorId,
            courseImage: req.file.path,
            courseName: req.body.courseName,
            mentorName: req.body.mentorName,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            curriculum: req.body.curriculum,
            location: req.body.location
        });
        console.log(course);
        course
            .save()
            .then(result => {
                res.status(201).json({
                    message: "Course successfully created"
                    // result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    }
}