const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var MentorSchema = new Schema({
    fullName: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    phone: { type: Number, default: '' },
    birthDate: { type: Number, default: '' },
    province: { type: String, default: '' },
    city: { type: String, default: '' },
    address: { type: String, default: '' },
    npwp: { type: String, default: '' },
    bankName: { type: String, default: '' },
    bankAccount: { type: String, default: '' },
    about: { type: String, default: '' },
    experience: { type: String, default: '' },
    hashedPassword: { type: String, default: '' }
});

MentorSchema.plugin(autoIncrement.plugin, 'Mentor');
module.exports = mongoose.model('Mentor', MentorSchema);
// TODO: add hooks, validation, salt(?)