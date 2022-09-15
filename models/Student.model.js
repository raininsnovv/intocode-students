const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  _groupId: {
    type: mongoose.SchemaTypes.ObjectId,
    default: null, 
    ref: "Group",
  },
  status: { type: String, required: true, trim: true },
  paid: { type: String, required: true, trim: true },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
