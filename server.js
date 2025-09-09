const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json()); //Declara que o express vai precisar trabalhar com JSON.

app.post("/mensagem", (req, res) => {
    try {
        const { mensagem: { nome, idade, timeFavorito } } = req.body;
        console.log(`Olá, ${nome}! Você tem ${idade} anos e torce para o ${timeFavorito}!`); //Retorna ao console as informações obtidas
        res.status(201).json({ message: `Olá, ${nome}! Você tem ${idade} anos e torce para o ${timeFavorito}!` }); //Retorna as informações obtidas com sucesso (200)
    } catch (error) { //Parte para dar uma mensagem de erro em caso de erro
        console.error(`Erro: `, error);
        res.status(500).json({ errorMessage: error });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})