const mongoose = require("mongoose");

const orphanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  storyBehind: {
    type: String,
    required: true,
  },
  yearOfEnroll: {
    type: String,
    required: true,
  },
});
const OrphanModel = mongoose.model("orphan", orphanSchema);

module.exports = OrphanModel;
