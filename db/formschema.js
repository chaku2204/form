const mongoose = require("mongoose");

const form_data_schema = new mongoose.Schema({
  name: String,
  email: String,
  user: String,
  pass: String,
  conpass: String,
  mobile: String
});

const formmodel = new mongoose.model("formdata",form_data_schema);

module.exports = formmodel;
