const express = require ('express');
const router = express.Router();

// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require('../controllers/apiController');

//Lista carros
router.get('/carros', apiController.listCars);

//Lista carro
router.get('/carros/:id', apiController.getCarById);

//Adiciona carros
router.post('/carros', apiController.createCar);

//Atualiza carros
router.put('/carros/:id', apiController.updateCar);

//Deleta carros
router.delete('/carros/:id', apiController.deleteCar)

module.exports = router;