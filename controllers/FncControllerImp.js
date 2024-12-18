const FncController = require("./FncController.js");

const config = require("../config.js");
const FncDAO = require("../persistencelayer/dao/" + config.FncDAO);
let fncdao = new FncDAO();

class FncControllerImp extends FncController {
  constructor() {
    super();
  }

  async read(req, res) {
    let fncs = await fncdao.recovery();
    return res.json(fncs);
  }
  async create(req, res) {
    const fnc = await fncdao.create(req);
    return res.json(fnc);
  }
  async delete(req, res) {
    let fnc = await fncdao.delete(req);
    return res.json(fnc);
  }
  async update(req, res) {
    let fnc = await fncdao.update(req);
    return res.json(fnc);
  }

  async search(req, res) {
    let fncs = await fncdao.search(req);
    return res.json(fncs);
  }
}
module.exports = FncControllerImp;
