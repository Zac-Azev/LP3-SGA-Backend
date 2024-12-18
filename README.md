Node + Mongoose
Após realizar um branch no trabalho principal de LP3, decidi criar outro repositório para meu versionamento do trabalho. 
Este é um Sistema de Gerenciamento de Asilo, no qual idosos, com demandas e atividades diárias, são cadastrados e alocados a seus respectivos cuidadores.

---- BACKEND ----

O trabalho possui algumas rotas principais. São elas:

i) /login

  A rota /login referencia as telas de login, seja administrativo ou funcionário, do protótipo previamente estabelecido.
    * /login/admin referencia o login administrativo;
    * /login/fnc referencia o login de funcionário;
    * /login/forgot referencia a tentativa de recuperação de login.

ii) /profile

  A rota /profile referencia as telas principais para interação e leitura dos dados dos idosos, funcionários e das atividades do dia de cada um.
  * /profile/fnc/workIsOver referencia a tela de logoff;
  * /profile/fnc/grandpaWindow/ referencia a tela de visualização de idoso específico;
  * /profile/fnc/actWindow/ referencia a tela de visualização de atividade específica;
  * /profile/fnc/actWindow/wasMade referencia a tela de marcação de atividade concluída;
  * /profile/adm/workIsOver referencia a tela de manutenção do administrador, que também consegue ver os funcionários.

iii) /profileAdm/Management

A rota /Management referencia as telas do CRUD administrativo, para criação e manipulação dos diferentes dados presentes na DB.

* /profileAdm/grandpaManagement/create referencia tela de cadastro;
* /profileAdm/grandpaManagement/read referencia tela de leitura;
* /profileAdm/grandpaManagement/update referencia tela de atualização;
* /profileAdm/grandpaManagement/delete referencia tela de destruição;

Esse padrão se repetirá para /actManagement e /fncManagement.

 
  
