//2. Criar um projeto com uma rota POST /soma que receba 3 números no body e retorne o resultado da soma dos números recebidos.
//Verifique antes da soma se os os campos recebidos possuem valores numéricos;
//Se necessário, informe ao cliente os problemas encontrados;

const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json()); //Declara que o express vai precisar trabalhar com JSON.

app.post("/soma", (req, res) => {
    try {
        const { soma: { num1, num2, num3 } } = req.body;

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) { //I
            res.status(400).json({ message: `Erro: O número deve ser um número` });
        } else {
            const soma = num1+num2+num3; // Constante criada para somar todos os números
            console.log(`${num1}+${num2}+${num3}+=${soma}`); //Retorna ao console as informações obtidas
            res.status(201).json({ message: `${num1}+${num2}+${num3}+=${soma}` }); //Retorna as informações obtidas com sucesso (200)
        }
    } catch (error) { //Parte para dar uma mensagem de erro em caso de erro
        console.error(`Erro: `, error);
        res.status(500).json({ errorMessage: error });
    }
})
app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
})