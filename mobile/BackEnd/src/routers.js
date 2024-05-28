const express = require("express");
const clientController = require("../controller/controller");
const router = express.Router();

router.get("/", clientController.getRoot); //rota raiz
router.get("/api/read", clientController.listAllUsers); //Listar todos os usuários
router.get("/api/read/:id",clientController.listByID); //Listar usuário por id
router.post("/api/create", clientController.createNewUser); //Cadastrar novo usuário
router.delete("/api/deletar/:id", clientController.deleteUser); //Deletar usuario por ID
//router.post("/api/reset", clientController.getEmailReset);//verificar o email de reset
//router.post("/api/resetpassword", clientController.resetPassword);//resetar a senha
router.post("/api/registerUser", clientController.registerSenai); //Cadastrar um novo usuario
router.post("/api/validate", clientController.login); //validar o login 

module.exports = router;