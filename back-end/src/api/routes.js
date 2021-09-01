const routes = require('express').Router();
const rescue = require('express-rescue');
const logins = require('./controllers/loginController');
const users = require('./controllers/userController');
const products = require('./controllers/productController');
const images = require('./controllers/imageController');
const sales = require('./controllers/saleController');

routes.post('/login', rescue(logins.login));

routes.post('/user', rescue(users.create));
routes.get('/user', rescue(users.findAll));

routes.get('/products', rescue(products.findAll));
routes.get('/images/:image', rescue(images.getImage));

routes.post('/sales', rescue(sales.create));
routes.get('/sales', rescue(sales.findAll));

module.exports = routes;