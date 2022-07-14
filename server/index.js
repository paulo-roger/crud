const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Y9WkEmRgfS2>5Wyu2pce5HwiP=Mxfd",
    database: "crud",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { surname } = req.body;

    let SQL = "INSERT INTO tabela ( name, surname) VALUES ( ?, ?)";

    db.query(SQL, [name, surname], (err, result) => {
        console.log(err);
    });
});

app.get("/getcard", (req, res) => {
    let SQL = "SELECT * from tabela";

    db.query(SQL, (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    });
});

app.listen(3001, () => {
    console.log("Servidor tá ON!")
});