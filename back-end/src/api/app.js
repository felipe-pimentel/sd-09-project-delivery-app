const express = require('express');
// const http = require('http');
const cors = require('cors');
const User = require('./controllers/users');
const Product = require('./controllers/products');

const app = express();
// const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors());

// const io = require('socket.io')(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000',
//     method: ['GET', 'POST'],
//   },
// });

app.get('/', () => console.log('hello world!'));

app.post('/login', User.loginUser);
app.post('/register', User.registerUser);
app.get('/users', User.getAllUsers);

app.get('/products', Product.getAllProducts);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
