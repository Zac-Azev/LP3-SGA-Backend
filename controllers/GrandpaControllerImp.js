const GrandpaController = require('./GrandpaController.js');


const config = require('../config.js');
const GrandpaDAO = require('../persistencelayer/dao/'+config.GrandpaDAO);
let grandpadao = new GrandpaDAO();

class GrandpaControllerImp extends GrandpaController{
  constructor(){
    super();

  }


  async read(req, res)
    {

       let grandpas = await grandpadao.recovery();
        return res.json(grandpas);
    }
  async create(req, res)
     {
        const grandpa =  await grandpadao.create(req);
        return res.json(grandpa);
     }
   async delete(req,res){
         let grandpa = await grandpadao.delete(req);
         return res.json(grandpa);
    }
   async update(req,res){
        let grandpa = await grandpadao.update(req);
        return res.json(grandpa);
    }

   async search(req,res)
    {
        let grandpas = await grandpadao.search(req);
        return res.json(grandpas);
    }

  async searchbyFnc(req,res)
    {
        let grandpas = await grandpadao.searchbyFnc(req);
        return res.json(grandpas);
    }

}
module.exports = GrandpaControllerImp;