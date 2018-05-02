const express = require('express');
const router = express.Router();
const Course = require('../models/Course')

router.get('/', function(req, res, next) {
    Course.find(function(err, course){
        if(err) return next(err);
        res.status(200).json(course);
    })
});

router.get('/:courseId', function(req, res, next) {
    const id = req.params.courseId;
    Course.findOne({ _id: id})
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
});


// TODO: how to optional params, $and already worked
router.get('/search', function(req, res, next) {
    // const courseName = req.query.cn;
    const price = req.query.price;
    const location = req.query.loc;
    // console.log(typeof(location));
    Course.find({ 
        $and: [ 
            { price: { $gt : price } },
            { location: location } 
        ] 
    })
    .then(course => {
      if (!course) {
        return res.status(404).json({ 
          message: "No valid search" 
        });
      }
      res.status(200).json(course);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
    // res.status(200).json(req.query);
});

module.exports = router;
