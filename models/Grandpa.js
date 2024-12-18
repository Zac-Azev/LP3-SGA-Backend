const mongoose = require("mongoose");

const GrandpaSchema = new mongoose.Schema(
   {
      name: String,
      cpf: String,
      password: String,
      isLoggedOn: Boolean,
      _idFnc: {
         type: mongoose.Schema.Types.FncId,
         required: true,
      },
   },
   { timestamps: true },
);

module.exports = mongoose.model("Grandpa", GrandpaSchema);
