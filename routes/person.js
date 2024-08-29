const express = require("express");
const router = express.Router();
const Person = require("../model/Person");
const PersonController = require("../controller/Person");

const people = [];

router
  // .get('/api/person/first', (req, res) => {
  //     console.log(8+5);
  //     return
  // })
  // .get('/:numero?', (req, res) => { // "?" serve para o dado ser opcional
  //     const { numero } = req.params
  //     res.send(`Número recebido: ${numero}`);
  // })
  // .get('/:numero?', (req, res) => { // "?" serve para o dado ser opcional
  //     const { numero } = req.query
  //     res.send(`Número recebido: ${numero}`);
  // })
  // .post('/api/person', (req, res) => {
  //     const body = req.body;

  //     if(!name || !lastname || !salary)
  //         return res.status(400).send({ message: "Dados inválidos" })

  //     const person = {
  //         name: body.name,
  //         lastname: body.lastname,
  //         salary: body.salary
  //     }
  //     people.push(person);

  //     return res.status(201).send("Pessoa cadastrada com sucesso.")
  // })
  // .get('/api/person', (req, res) => {
  //     return res.status(200).send({ data: people });
  // })
//   .get("/api/person/first", (req, res) => {
//     console.log(8 + 5);
//     return;
//   })
//   .get("/api/person", (req, res) => {
//     return res.status(200).send({ data: people });
//   })
  .post("/", PersonController.create)
  .get('/',PersonController.getAll)
  .get('/',PersonController.getById)


module.exports = router;
