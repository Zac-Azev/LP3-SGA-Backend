const AdmController = require("./AdmController.js");

const config = require("../config.js");
const admDAO = require("../persistencelayer/dao/" + config.admDAO);
let admdao = new admDAO();

class AdmControllerImp extends AdmController {
  constructor() {
    super();
  }

  async read(req, res) {
    let adms = await admdao.recovery();
    return res.json(adms);
  }
  async create(req, res) {
    const adm = await admdao.create(req);
    return res.json(adm);
  }
  async delete(req, res) {
    let adm = await admdao.delete(req);
    return res.json(adm);
  }
  async update(req, res) {
    let adm = await admdao.update(req);
    return res.json(adm);
  }

  async search(req, res) {
    let adms = await admdao.search(req);
    return res.json(adms);
  }
}
module.exports = AdmControllerImp;
