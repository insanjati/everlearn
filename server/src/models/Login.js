const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var LoginSchema = new Schema({
    email: { type: String, default: '' },
    hashedPassword: { type: String, default: '' }
});

LoginSchema.plugin(autoIncrement.plugin, 'Login');
module.exports = mongoose.model('Login', LoginSchema);
// TODO: add hooks, validation, salt(?)