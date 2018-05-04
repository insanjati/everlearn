const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
 
autoIncrement.initialize(mongoose.connection);

const StudentSchema = new Schema({
    fullName: { type: String, default: '' },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, default: '' },
    birthDate: { type: Number, default: '' },
    status: { type: String, default: '' },
    province: { type: String, default: '' },
    city: { type: String, default: '' },
    address: { type: String, default: '' },
    bookmarks: { type: [Schema.Types.Number], ref: 'Course' }
});

StudentSchema.plugin(autoIncrement.plugin, 'Student');
module.exports = mongoose.model('Student', StudentSchema);
// TODO: add hooks, validation, salt(?)