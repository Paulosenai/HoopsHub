const clientController = require("../model/model");

const userController = {

    //route root 
    getRoot: async(req,res)=>{
        res.status(200).json({msg: "The API is running!!!"})
    },

    //Controller para listar todos os usuários do banco
    listAllUsers: async(req,res)=>{
        try{
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch(error){
            res.status(500).json({error: "Erro ao obter a lista de usuários"})
        }
    },

    //listar usuário por id
    listByID: async(req,res)=>{
        try{
            const sql = await clientController.getByID(req.params.id);

            if(sql.length > 0){
                res.status(200).json(sql)
            }
            else{
                res.status(401).json({msg:"Não existe registro no banco com este ID"})
            }
        }
        catch(error){
            return error
        }
    },

    //Criar um novo usuário
    createNewUser: async(req,res)=>{
        const {id,nome,sobrenome,idade} = req.body;

        try{
            const sql = await clientController.getByID(id);

            if(sql.length > 0){
                res.status(401).json({msg: "O ID já está cadastrado no BD"})
            }
            else{
                await clientController.registerUser(id,nome,sobrenome,idade);
                res.status(201).json({msg:"Usuário cadastrado com sucesso"});
            }
        }
        catch(error){
            return error
        }
    },

    
    //Deletar um usuario pelo ID 
    deleteUser: async(req,res)=>{
        try{
            const sql = await clientController.getByID(req.params.id);

            if(sql.length > 0){
                await clientController. deleteUser(req.params.id);
                res.status(204).json({msg:"Usuario deletado com sucesso!!!"})
            }
            else{
                res.status(401).json({msg:"O ID nao existe na base de dados"})
            }
        }
        catch(error){
            res.status(500).json({error: "Erro ao tentar deletar o usuario"})
        }
    },
    updateUser: async(req,res)=>{
        const{email, senha}= req.body;
        try{
            const sql = await clientController.getByID(req.params.id)

            if(sql.length > 0){
                await clientController.updateUser(email, senha, req.params.id)
                res.status(200).json({msg:"Atualizado com sucesso"})
            }
            else{
                res.status(401).json({msg:"O id nao existe na base de dados"})
            }
        }
        catch(erro){
            if(erro){
                res.status(500).json({msg:"Erro no servidor"+erro})
            }
        }
    },
    //cadastrar um novo usuario no banco 
    registerSenai: async(req,res)=>{
        const{id,nome,email,senha} = req.body;
        try{
            const sql = await clientController.getByEmail(email);

            if(sql.length > 0){
                res.status(401).json({msg:"O email ja esta cadastrado, Insira um email valido"})
            }
            else{
                await clientController.registerUser(id,nome, email, senha);
                res.status(201).json({msg:"Usuario cadastrado com sucesso"})
            }
        }
        catch(erro){
            console.log(erro);
            res.status (500).json({msg:"Ocorreu um erro durante o registro de usuarios"});
        }
    },
    login: async (req,res)=>{
        let {email,senha} = req.body;

        senha = senha.toString();

        try{
            const sql = await clientController.validateLogin(email, senha);

            if(sql.length > 0 && sql[0].senha === senha){
                res.status(200).json({msg:"Email e senha validados com sucesso!!!"});
            }
            else{
                res.status(401).json({msg:"Email ou senha incorretos"});
            }          
        }
        catch (error){
            if(error){
                console.log(error)
                res.status(500).json(error);
            }
        }
    }
};

module.exports = userController;
