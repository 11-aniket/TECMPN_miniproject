const mongoose = require("mongoose");

const AdoptionSchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const AdoptionModel = mongoose.model("adoption", AdoptionSchema);

module.exports = AdoptionModel;
