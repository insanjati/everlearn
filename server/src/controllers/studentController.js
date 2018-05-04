const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../models/Student");
const Purchase = require('../models/Purchase');
const Course = require('../models/Course')
const Bookmark = require('../models/Bookmark')

module.exports = {
    // Profile: GET and PUT
    get_profile (req, res, next) {
        const studentId = req.params.studentId;
        Student.findOne({ _id: studentId})
            .exec()
            .then(student => {
                if (!student) {
                    return res.status(404).json({ 
                    message: "No valid profile found"
                    });
                }
                res.status(200).json(student);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                error: err
                });
            });
    },
    put_profile (req, res, next) {
        const studentId = req.params.studentId;
        const content = req.body;
        Student.update({ _id: studentId}, content)
            .exec()
            .then(student => {
                res.status(200).json({
                    message: 'Profile updated successfully',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/student/profile/' + studentId
                    }
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    // Purchase: GET and POST
    get_purchase (req, res, next) {
        const studentId = req.params.studentId;
        Purchase.find({ student: studentId })
            .exec()
            .then(purchase => {
                if (purchase < 1) {
                    return res.status(401).jason({
                        message: "You have no purchase yet"
                    })
                    // TODO: resolve, error no user purchase nggak kedetect, langsung error 500
                }
                res.status(200).json(purchase);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    post_purchase (req, res, next) {
        const studentId = req.params.studentId;
        Course.findById(req.body.course)
            .then(course => {
                if (!course) {
                    return res.status(404).json({
                        message: "Course not found"
                    });
                }
                const purchase = new Purchase({
                    student: studentId,
                    course: req.body.course            
                });
                return purchase.save();
            })
            .then(purchase => {
                res.status(201).json({
                    message: "Purchase created successfully",
                    purchase,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/student/" + studentId + "/purchase"
                    }
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
    },
    // Bookmark: GET, POST, and DELETE
    get_bookmark (req, res, next) {
        const studentId = req.params.studentId;
        Bookmark.find({ student: studentId })
            .exec()
            .then(bookmark => {
                if (bookmark < 1) {
                    return res.status(404).json({ 
                        message: "You have no bookmarked course"
                    });
                }
                res.status(200).json(bookmark);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
            });
    },
    post_bookmark (req, res, next) {
        const studentId = req.params.studentId;
        const course = req.body.course;
        const bookmark = new Bookmark({
            student: studentId,
            course: course
        })
        console.log(bookmark);
        bookmark
            .save()
            .then(result => {
                res.status(201).json({
                    message: "Course successfully bookmarked",
                    result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            });
    },
    delete_bookmark (req, res, next) {
        const studentId = req.params.studentId;
        const bookmarkId = req.params.bookmarkId;
        Bookmark.remove({ 
            $and: [ 
                { _id: bookmarkId }, 
                { student: studentId }
            ] 
        })
            .exec()
            // respon kalo studentId/bookmarkId not found belum works, masih deleted successfully
            .then(result => {
                if (result.length < 1) {
                    return res.status(404).json({ 
                        message: "Bookmarked course not found"
                    });
                }
                res.status(200).json({
                    message: 'Bookmark deleted successfully',
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/student/' + studentId + '/bookmark'
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