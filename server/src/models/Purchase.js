const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

var PurchaseSchema = new Schema({
    student: { type: Schema.Types.Number, ref: 'Student', required: true },
    course: { type: Schema.Types.Number, ref: 'Course', required: true }
});

PurchaseSchema.plugin(autoIncrement.plugin, 'Purchase');
module.exports = mongoose.model('Purchase', PurchaseSchema);
// TODO: add hooks?