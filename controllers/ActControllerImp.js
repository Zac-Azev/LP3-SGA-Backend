const ActController = require('./ActController.js');


const config = require('../config.js');
const ActDao = require('../persistencelayer/dao/'+config.ActDao);
let actdao = new ActDao();

class ActControllerImp extends ActController{
  constructor(){
    super();

  }


  async read(req, res)
    {

       let acts = await actdao.recovery();
        return res.json(acts);
    }
  async create(req, res)
     {
        const act =  await actdao.create(req);
        return res.json(act);
     }
   async delete(req,res){
         let act = await actdao.delete(req);
         return res.json(act);
    }
   async update(req,res){
        let act = await actdao.update(req);
        return res.json(act);
    }

   async search(req,res)
    {
        let acts = await actdao.search(req);
        return res.json(acts);
    }

  async searchbyGrandpa(req,res)
    {
        let acts = await actdao.searchbyUser(req);
        return res.json(acts);
    }

}
module.exports = ActControllerImp;