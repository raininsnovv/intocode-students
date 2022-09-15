const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
    name: { type: String, required: true },
    _studentId: [{type: mongoose.SchemaTypes.ObjectId,default:true, ref: 'Student'}],
    week: {type: Number, default: 0},
    finished: {type: Boolean, default: false}
})

const Group = mongoose.model('Group', groupSchema)
module.exports = Group