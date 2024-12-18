const mongoose = require("mongoose");

const AdmSchema = new Schema({
  name: String,
  cpf: String,
  password: String,
  isLoggedOn: Boolean,
  isAdmin: Boolean,
});

module.exports = mongoose.model("Adm", AdmSchema);
