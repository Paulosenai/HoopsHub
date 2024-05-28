const connection = require("../config/db");

const userModel = {
    getAllUsers: async () =>{
        const [result] = await connection.query("SELECT * FROM cadastro_senai")
        .catch(erro => console.log(erro));
        return result
    },

    getByID: async (id) =>{
        const [result] = await connection.query("SELECT * FROM cadastro WHERE id =?",[id])
        .catch(erro => console.log(erro));
        return result
    },

    registerUserr: async (id, nome, sobrenome, idade) =>{
        const [result] = await connection.query("INSERT INTO cadastro values(?,?,?,?)",[id,nome,sobrenome,idade])
        .catch(erro => console.log(erro));
        return result
    },

    deleteUser: async (id)=>{
        const [result] = await connection.query("DELETE FROM cadastro_senai WHERE id=? ", [id])
        .catch(erro => console.log(erro));
        return result
    },
    //Model para login
    
    getByEmail: async (email)=>{
        const [result] = await connection.query("SELECT * FROM cadastro WHERE email=?", [email])
        .catch(erro => console.log(erro));
        return result;
    },
    validateLogin: async(email, senha)=>{
        const [result] = await connection.query("SELECT * FROM cadastro WHERE email=? AND senha=?", [email, senha])
        .catch(erro => console.log(erro));
        return result;
    },
    registerUser: async(id,nome,email,senha)=>{
        const [result] = await connection.query("INSERT INTO cadastro values(?,?,?,?)", [id, nome, email, senha])
        .catch(erro => console.log(erro));
        return result;
    },
    updateUser: async(id, email, senha)=>{
        const [result] = await connection.query("UPDATE cadastro SET email=?, senha=?, WHERE id=?",[id, email, senha])
        .catch(erro => console.log(erro));
        return result;
    },
};

module.exports = userModel;