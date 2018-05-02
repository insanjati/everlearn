const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

// TODO: add user id yang ngambil course
var PurchaseSchema = new Schema({
    student: { type: Schema.Types.Number, ref: 'Course', required: true },
    course: { type: Schema.Types.Number, ref: 'Course', required: true },
    // quantity: { type: Number, default: 1 }
});

PurchaseSchema.plugin(autoIncrement.plugin, 'Purchase');
module.exports = mongoose.model('Purchase', PurchaseSchema);
// TODO: add hooks, validation, salt(?)