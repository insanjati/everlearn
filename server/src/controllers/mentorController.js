const { 
  mentors: Mentor,
  courses: Course
} = require('../models');
// const authMentor = require('../helpers/authMentor');
// const JWT = require('jsonwebtoken');
// const { JWT_SECRET } = require('../config');

module.exports = {
  // Profile: GET and PUT
  async getProfile (req, res) {
    const mentorId = req.params.mentorId;
    const payloadSub = req.userData.sub.toString();

    try {
      if (payloadSub !== mentorId) {
        console.log('done that');
        return res.status(400).json({
          message: 'You are unauthorized to view this route'
        })
      } else {
        const mentor = await Mentor.findOne({ where: { id: mentorId } });
        if (!mentor) {
          return res.status(404).json({
            message: 'No valid profile found'
          })
        }
        return res.status(200).json({
          message: 'Mentor profile found',
          mentor,
          request: {
            type: 'PUT',
            url: 'http://localhost:8000/mentor/' + mentorId + '/profile'
          }
        });
      }
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async putProfile (req, res) {
    const mentorId = req.params.mentorId;
    const content = req.body;
    // console.log(content);
    try {
      const mentor = await Mentor.update(content, {
        where : {
          id: mentorId
        }
      });
      res.status(200).json({
        message: 'Profile updated successfully',
        mentor,
        request: {
          type: 'GET',
          url: 'http://localhost:8000//mentor/' + mentorId + '/profile'
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  // Course: GET ALL, GET BY ID, POST, PUT, and DELETE
  async getAllCourses (req, res) {
    const mentorId = req.params.mentorId;
    const payloadSub = req.userData.sub.toString();
    // console.log('payload: ', payloadSub, typeof(payloadSub));
    // console.log('params: ', mentorId, typeof(mentorId));
    // const token = req.headers.authorization;
    // const payload = JWT.verify(token, JWT_SECRET);
    
    try {
      if (payloadSub !== mentorId) {
        console.log('done that');
        return res.status(400).json({
          message: 'You are unauthorized to view this route'
        })
      } else {
        const courses = await Course.findAll({
          where : {
            mentorId: mentorId
          },
          limit: 10
        });
        if (courses.length < 1) {
          return res.status(404).json({
            message: 'You have no course yet'
          })
        }
        return res.status(200).json({
          message: 'Here\'s all the courses you created',
          total: courses.length,
          courses
        });
      }
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async getCourseById (req, res) {
    const mentorId = req.params.mentorId;
    const courseId = req.params.courseId;
    try {
      const course = await Course.findOne({ 
        where: { 
          id: courseId,
          mentorId: mentorId
        } 
      });
      if (!course) {
        return res.status(404).json({
          message: 'No valid course found'
        })
      }
      return res.status(200).json({
        message: 'Course found',
        course,
        request: {
          type: 'PUT',
          url: 'http://localhost:8000/mentor/' + mentorId + '/course' + courseId
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async createCourse (req, res) {
    const mentorId = req.params.mentorId;
    // console.log(req.body);
    // console.log(mentorId);
    const content = {
      mentorId: mentorId,
      courseName: req.body.courseName,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      curriculum: req.body.curriculum
    };
    // console.log(content);
    // console.log(content2);
    // console.log(mentorId);
    try {
      const course = await Course.create(content);
      return res.status(201).json({
        message: 'Course created successfully',
        course,
        request: {
          type: 'GET',
          url: 'http://localhost:8000/mentor/' + mentorId + '/course' + course.id
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async putCourse (req, res) {
    const mentorId = req.params.mentorId;
    const courseId = req.params.courseId;
    const content = req.body;
    // console.log(content);
    try {
      const course = await Course.update(content, {
        where : {
          id: courseId,
          mentorId: mentorId
        }
      });
      res.status(200).json({
        message: 'Course updated successfully',
        course,
        request: {
          type: 'GET',
          url: 'http://localhost:8000/mentor/' + mentorId + '/course/' + courseId
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async deleteCourse (req, res) {
    const mentorId = req.params.mentorId;
    const courseId = req.params.courseId;
    // console.log(content);
    try {
      const course = await Course.destroy({
        where : {
          id: courseId,
          mentorId: mentorId
        }
      });
      if (!course) {
        return res.status(404).json({
          message: 'No valid course found'
        })
      }
      res.status(200).json({
        message: 'Course deleted successfully',
        request: {
          type: 'GET',
          url: 'http://localhost:8000/mentor/' + mentorId + '/courses'
        }
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}