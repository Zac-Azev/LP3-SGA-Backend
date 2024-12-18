const mongoose = require("mongoose");

const GrandpaDAO = require("./GrandpaDAO.js");

const Grandpa = require("../models/Grandpa.js");

class GrandpaDAOImp extends GrandpaDAO {
  constructor() {
    super();
    mongoose.connect(
      "mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
  }
  async create(req) {
    const grandpa = await Grandpa.create(req.body);
    return grandpa;
  }
  async recovery() {
    let grandpas = await Grandpa.find().sort({ createdAt: -1 }).limit(5);
    return grandpas;
  }
  async update(req) {
    let grandpa = await Grandpa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return grandpa;
  }

  async delete(req) {
    let grandpa = await Grandpa.findByIdAndRemove(req.params.id);
    return grandpa;
  }

  async search(req) {
    let grandpas = await Grandpa.find({ _idUser: req.query.idUser })
      .sort({ createdAt: -1 })
      .limit(5);
    return grandpas;
  }

  async searchbyFnc(req) {
    let grandpas = await Grandpa.find({ _idFnc: req.params.idFnc })
      .sort({ createdAt: -1 })
      .limit(5);
    return grandpas;
  }
}
module.exports = GrandpaDAOImp;
