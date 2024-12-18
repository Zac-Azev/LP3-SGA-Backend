const mongoose = require("mongoose");

const FncSchema = new Schema({
  name: String,
  cpf: String,
  password: String,
  isLoggedOn: Boolean,
});

module.exports = mongoose.model("Fnc", FncSchema);
