/*TODO: 1) Criar Controllers pras funções
        2) Criar os DAOs
        3) Criar DAOimps
*/
const express = require("express");
const bodyParser = require("body-parser");
//================================
const mongoose = require("mongoose");
var cors = require("cors");
mongoose.connect(
  "mongodb+srv://isaac61292:isaacramos22!@azev-pc3.aaipb.mongodb.net/?retryWrites=true&w=majority&appName=azev-pc3",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
//======================================
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//========================================
const FncController = require("./controllers/FncController");
const GrandpaController = require("./controllers/GrandpaController");
const ActController = require("./controllers/ActController");
const AdmController = require("./controllers/AdmController");
const FncDAO = require("./dao/FncDAO");
//================ TESTE ========================

app.get("/", (req, res) => {
  //teste
  res.send("Servidor está de pé!");
});

app.get("/init", (req, res) => {
  //tela inicial
  res.send("SGA - Sistema de Gerenciamento de Asilo!");
});
//================== LOGIN ======================

app.get("/login/fnc/:id/:passw", (req, res) => {
  //tela de login de funcionário
  res.send(
    FncController.update +
      "seu login é: " +
      req.params.id +
      " e sua senha é: " +
      req.params.passw,
  ); //tem que passar alguns dados do
});

app.get("/login/adm/:id/:passw", (req, res) => {
  //tela de login administrativo
  res.send(
    AdmController.update +
      "seu login é: " +
      req.params.id +
      " e sua senha é: " +
      req.params.passw,
  ); //tem que passar alguns dados do
});

app.get("/login/forgot", (req, res) => {
  //tela de login de funcionário
  res.send("Resolvendo o problema...");
});

//================== PROFILE FNC ======================

app.post("/login/profilefnc/:id", (req, res) => {
  //tela de profile de funcionário
  res.send(
    "Aqui irão vários acessos aos idosos linkados e atividades do dia" +
      GrandpaController.searchbyFnc +
      "\n" +
      FncController.searchbyGrandpa(GrandpaController.searchbyFnc));
});

app.post("/login/profilefnc/:id/workIsOver", (req, res) => {
  res.send("Bater ponto" + FncController.update);
});

app.get("/login/profilefnc/:idFnc/grandpaWindow/:idGrandpa", (req, res) => {
  res.send(
    "Aqui, a partir da escolha de um idoso, acessar-se-á seus dados" +
      GrandpaController.read,
  );
});

app.get("/login/profilefnc/:idFnc/actShow/:idAct", (req, res) => {
  res.send(
    "Aqui, a partir da escolha de uma atividade, acessar-se-á seus dados" +
      ActController.read,
  );
});

app.post("/login/profilefnc/:idFnc/actShow/:idAct/was-made", (req, res) => {
  res.send("Atividade concluída!" + ActController.update);
});

//================== PROFILE ADM ======================

app.post("/login/profileAdm/:id", (req, res) => {
  res.send(
    "Aqui é a tela de perfil do administrador, e terá visualização de alguns outros recursos" +
      GrandpaController.search+"\n"+FncController.search,
  );
});

app.post("/login/profileAdm/:id/workIsOver", (req, res) => {
  res.send("Bater ponto" + AdmController.update);
});

//================== CRUDS ======================


//================== GRANDPA_CRUD ======================

app.put(
  "/login/profileAdm/:idAdm/grandpaManagement/:idGrandpa/create",
  (req, res) => {
    //add idoso
    res.send(GrandpaController.create);
  },
);

app.get(
  "/login/profileAdm/:idAdm/grandpaManagement/:idGrandpa/list",
  (req, res) => {
    //lê idoso
    res.send(GrandpaController.search);
  },
);

app.delete(
  "/login/profileAdm/:idAdm/grandpaManagement/:idGrandpa/delete",
  (req, res) => {
    //remove idoso
    res.send(GrandpaController.delete);
  },
);

app.put(
  "/login/profileAdm/:idAdm/grandpaManagement/:idGrandpa/update",
  (req, res) => {
    //update idoso
    res.send(GrandpaController.update);
  },
);

//================== FNC_CRUD ======================


app.put("/login/profileAdm/:idAdm/fncManagement/:idFnc/create", (req, res) => {
  //add funcionario
  res.send(FncController.create);
});

app.get("/login/profileAdm/:idAdm/fncManagement/:idFnc/list", (req, res) => {
  //mostra funcionario
  res.send(FncController.search);
});

app.delete(
  "/login/profileAdm/:idAdm/fncManagement/:idFnc/delete",
  (req, res) => {
    //remove funcionario
    res.send(FncController.delete);
  },
);

app.put("/login/profileAdm/:idAdm/fncManagement/:idFnc/update", (req, res) => {
  //update funcionario
  res.send(FncController.update);
});

//================== ACT_CRUD ======================


app.put(
  "/login/profileAdm/:idAdm/actManagement/:idAct/create",
  (req, res) => {
    //add act
    res.send(ActController.create);
  },
);

app.get("/login/profileAdm/:idAdm/actManagement/:idAct/list", (req, res) => {
  //mostra act
  res.send(ActController.search);
});

app.delete(
  "/login/profileAdm/:idAdm/actManagement/:idAct/delete",
  (req, res) => {
    //remove act
    res.send(ActController.delete);
  },
);

app.put(
  "/login/profileAdm/:idAdm/actManagement/:idAct/update",
  (req, res) => {
    //update act
    res.send(ActController.update);
  },
);

app.listen(3000, () => console.log("server started"));
