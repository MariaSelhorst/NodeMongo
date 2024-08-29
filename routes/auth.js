const express = require('express');
const AuthController = require('../controller/auth');
const router = express.Router();

router
    .post('/register', AuthController.register)
    .post('/login', AuthController.login)
    .delete('/delete/:id', AuthController.delete)
    .get('/getAll', AuthController.getAll)

module.exports = router;