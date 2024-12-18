const mongoose = require('mongoose');

const ActDAO = require('./ActDAO.js');

const Act = require('../models/Act.js');


class ActDAOImp extends ActDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const act =  await Act.create(req.body);
          return act;
     }  
     async recovery(){ 
          let acts = await Act.find().sort({ createdAt: -1 }).limit(5);
          return acts; 
         }
     async update(req){
       let act = await Act.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return act;

     }
  
     async delete(req){
        let act = await Act.findByIdAndRemove(req.params.id);
        return act; 
     } 

     async search(req){
        let acts = await Act.find(
          { _idUser : req.query.idUser}
                                 ).sort({ createdAt: -1 }).limit(5); 
       return acts;

     } 

    async searchbyGrandpa(req){
        let acts = await Act.find(
          { _idGrandpa : req.params.idGrandpa}
                                 ).sort({ createdAt: -1 }).limit(5); 
       return acts;

     } 


}
module.exports = ActDAOImp;