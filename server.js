// 3. Criar um projeto com uma rota POST /login que receba um usuário e senha no body e verifique:
// O usuário e senha infomados estão corretos.
// Se os valores forem diferentes do esperado, retorne um erro no formato json informado o usuário.

const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json()); //Declara que o express vai precisar trabalhar com JSON.

app.post("/login", (req, res) => {
    try {
        const { login: { usuario, senha } } = req.body;

        if (usuario == "nicolas" && senha == 1234) {
            console.log(`Seja bem vindo(a), ${usuario}! Senha correta`); //Retorna ao console as informações obtidas
            res.status(201).json({ message: `Seja bem vindo(a), ${usuario}! Senha correta` }); //Retorna as informações obtidas com sucesso (200)
        } else {
            res.status(403).json({ message: `Erro: Usuário ou senha inválido.` }); //Retorna erro (403)
        }
    } catch (error) { //Parte para dar uma mensagem de erro em caso de erro
        console.error(`Erro: `, error);
        res.status(500).json({ errorMessage: error });
    }
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})