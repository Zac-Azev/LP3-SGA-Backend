const mongoose = require("mongoose");

const FncDAO = require("./FncDAO.js");

const Fnc = require("../models/Fnc.js");

class FncDAOImp extends FncDAO {
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
    const fnc = await Fnc.create(req.body);
    return fnc;
  }
  async recovery() {
    let fncs = await Fnc.find().sort({ createdAt: -1 }).limit(5);
    return fncs;
  }
  async update(req) {
    let fnc = await Fnc.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return fnc;
  }

  async delete(req) {
    let fnc = await Fnc.findByIdAndRemove(req.params.id);
    return fnc;
  }

  async search(req) {
    let fncs = await Fnc.find({ _idUser: req.query.idUser })
      .sort({ createdAt: -1 })
      .limit(5);
    return fncs;
  }

  
}
module.exports = FncDAOImp;
