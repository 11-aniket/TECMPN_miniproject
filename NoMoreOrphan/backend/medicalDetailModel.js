const mongoose = require("mongoose");

const MedicalDetailSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  orphanId: {
    type: String,
    required: true,
  },
  allergies: {
    type: [String],
    required: true,
  },
  symptoms: {
    type: [String],
    required: true,
  },
  diagonsis: {
    type: [String],
    required: true,
  },
  treatment: {
    type: [String],
    required: true,
  },
});
const MedicalDetailModel = mongoose.model(
  "medicalDetails",
  MedicalDetailSchema
);

module.exports = MedicalDetailModel;
