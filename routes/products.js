const express = require("express");
const router = express.Router();
const Product = require("../model/Products");

router
    .post('/api/product', async (req, res) =>{
        const {name, description, barCode, price} = req.body;
        if (!name ||!description || !barCode || !price)
            return res.status(400).send({ message: "Dados inválidos" });
        const product = {
            name: name,
            description: description,
            barCode: barCode,
            price: price,
        };
        try {
            const p = await Product.create(product);
            return res
              .status(201)
              .send({ message: "Produto inserido com sucesso", body: p });
          } catch (error) {
            return res.status(500).send({ error: error });
          }
    })
    .get('/api/product', async (req, res) => {
        try {
            const product = await Product.find();
            return res.status(200).send({ data: product });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
        })

module.exports = router;
