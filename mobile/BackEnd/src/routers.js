const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get("/", clientController.getRoot); //rota raiz
router.get("/api/read", clientController.listAllUsers); //Listar todos os usuários
router.get("/api/read/:id",clientController.listByID); //Listar usuário por id
router.post("/api/create", clientController.createNewUser); //Cadastrar novo usuário
router.delete("/api/deletar/:id", clientController.deleteUser); //Deletar usuario por ID
router.put("/api/update/paulo/cesar/:id", clientController.updateUser); //Atualizar o usuario
router.post("/api/registerUser", clientController.registerSenai); //Cadastrar um novo usuario
router.post("/api/validate", clientController.login); //validar o login 
router.post("/api/reset", clientController.getEmailReset);//verificar o email de reset
router.post("/api/resetpassword", clientController.resetPassword);//resetar a senha
router.get('/api/readNews', clientController.listAllNews);
router.get('/api/readNewsID/:id', clientController.listNewsbyID);

module.exports = router;