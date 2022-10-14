const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expertize: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = DoctorModel;
