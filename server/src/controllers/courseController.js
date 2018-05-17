const { 
  courses: Course
} = require('../models');

module.exports = {
  // Course: GET ALL, GET BY ID
  async getAllCourses (req, res) {
    try {
      const courses = await Course.findAll();
      console.log(courses.length);
      // console.log(typeOf(courses));
      // if (courses.length < 1) {
      //   return res.status(404).json({
      //     message: 'You have no course yet'
      //   })
      // }
      res.status(200).json({
        //jumlah courses dulu, ambil length property
        message: 'Here\'s all the courses we have for you',
        total: courses.length,
        courses
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  },
  async getCourseById (req, res) {
    const courseId = req.params.courseId;
    try {
      const course = await Course.findOne({ 
        where: { 
          id: courseId
        } 
      });
      if (!course) {
        return res.status(404).json({
          message: 'No valid course found'
        })
      }
      return res.status(200).json({
        message: 'Course found',
        course
      });
    } catch (err) {
      return res.status(400).json({
        error: err.message
      });
    }
  }
}