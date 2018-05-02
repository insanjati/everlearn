const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

// TODO: add host (mentor ID), kuota, durasi course, due date for registration
var CourseSchema = new Schema({
    mentor: { type: Schema.Types.Number, ref: 'Mentor', required: true },
    productImage: { type: String, required: true },
    courseName: { type: String, required: true },
    mentorName: { type: String, required: true },
    price: { type: Number, required: true },
    shortDesc: { type: String, required: true },
    moreDesc: { type: String, required: true },
    curriculum: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number },
    purchased: { type: Number }
});

CourseSchema.plugin(autoIncrement.plugin, 'Course');
module.exports = mongoose.model('Course', CourseSchema);
// TODO: add hooks, validation, salt(?)