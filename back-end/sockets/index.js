const Sales = require('../src/services/Sales');
const Users = require('../src/services/Users');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('updateStatus', ({ id, status, rgb }) => {
    io.emit('newStatus', { id, status, rgb });
    Sales.updateSale(id, { status });
  });

  socket.on('deleteUser', async () => {
    const result = await Users.getAll();
    io.emit('getUsers', (result));
  });
});