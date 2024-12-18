const mongoose = require("mongoose");

const AdmDAO = require("./AdmDAO.js");

const Adm = require("../models/Adm.js");

class AdmDAOImp extends AdmDAO {
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
    const adm = await Adm.create(req.body);
    return adm;
  }
  async recovery() {
    let adms = await Adm.find().sort({ createdAt: -1 }).limit(5);
    return adms;
  }
  async update(req) {
    let adm = await Adm.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return adm;
  }

  async delete(req) {
    let adm = await Adm.findByIdAndRemove(req.params.id);
    return adm;
  }

  async search(req) {
    let adms = await Adm.find({ _idUser: req.query.idUser })
      .sort({ createdAt: -1 })
      .limit(5);
    return adms;
  }
}
module.exports = AdmDAOImp;
