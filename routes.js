const express = require("express");
const app = express();
app.use(express.json());
const mensagens = [];

app.post("/webhook", (req, res) => {
    const { id, mensagem } = req.body;
    mensagens.push({ id, mensagem });
    res.status(201).json({ sucesso: true, mensagem: "Mensagem salva com sucesso" });
});

app.get("/mensagens", (req, res) => {
    res.json(mensagens);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});