const Person = require('../model/Person')

class PersonController{
    static async create(req, res){
        const { name, lastname, salary } = req.body;
    if (!name || !lastname || !salary)
      return res.status(400).send({ message: "Dados inválidos" });
    const person = {
      name: name,
      lastname: lastname,
      salary: salary,
    };
    try {
      const p = await Person.create(person);
      return res
        .status(201)
        .send({ message: "Pessoa inserida com sucesso", body: p });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
    }
    static async getAll (req, res){
        try {
            const people = await Person.find();
            return res.status(200).send({ data: people });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    static async getById (req, res){
        const { id } = req.params;
        try {
            const person = await Person.findById(id);
            return res.status(200).json(person);
        } catch (error) {
            res.status(500).json({ error: error })
        }   
    }
}

module.exports = PersonController;