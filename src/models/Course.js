const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

// TODO: add host (mentor ID), kuota, durasi course, due date for registration
var CourseSchema = new Schema({
    courseName: { type: String },
    mentor: { type: String },
    price: { type: Number },
    shortDesc: { type: String },
    moreDesc: { type: String },
    curriculum: { type: String },
    location: { type: String },
    rating: { type: Number },
    purchased: { type: Number }
});

CourseSchema.plugin(autoIncrement.plugin, 'Course');
module.exports = mongoose.model('Course', CourseSchema);
// TODO: add hooks, validation, salt(?)