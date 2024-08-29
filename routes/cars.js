const express = require('express');
const router = express.Router();

const cars = [];

router
    .post('/api/car', (req,res) => {
        const body = req.body;

        if(!body.brand || !body.model || !body.year)
            return res.status(400).send({ message: "Dados inválidos" })
        
        const car = {
            id: cars.length ,
            brand: body.brand,
            model: body.model,
            year: body.year
        }
        cars.push(car);

        return res.status(201).send("Carro cadastrado com sucesso.")
    })

    .get('/api/car', (req, res) => {
        return res.status(200).send({ data: cars });
    })

    .delete('/api/car/:id', (req, res) => {
        const {id} = req.params
        cars.splice(id, 1);
        return res.status(200).send({message: "Sucesso."})
    })

    .put('/api/car/:id', (req, res) =>{
        const {id} = req.params
        const body = req.body;

        cars[id].brand = body.brand;
        cars[id].model = body.model;
        cars[id].year = body.year;

        return res.status(200).send({messsage:"Sucesso."})
    })


module.exports = router