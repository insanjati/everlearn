const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var BookmarkSchema = new Schema({
    student: { type: Schema.Types.Number, ref: 'Course', required: true },
    course: { type: Schema.Types.Number, ref: 'Course', required: true },
});

BookmarkSchema.plugin(autoIncrement.plugin, 'Bookmark');
module.exports = mongoose.model('Bookmark', BookmarkSchema);
// TODO: add hooks, validation, salt(?)