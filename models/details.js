const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    // unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  contact_no: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time_slot: {
    type: String,
    required: true,
  },
});

const details = new mongoose.model("details", detailsSchema);
module.exports = details;
