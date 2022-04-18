const express=require('express')
const basket = express.Router();
const basketController = require('../controllers/basket')

const authMiddleware = require('../middlewares/auth')

// ------- CRUD корзины ------- //
basket.get('/', authMiddleware , basketController.getBasketUser)
basket.post('/', authMiddleware , basketController.addToBasket)


module.exports = basket