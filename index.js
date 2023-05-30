const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const exphbs = require('express-handlebars').create();
const path = require('path');


// Configuración de Handlebars
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


// Configuración del servidor WebSocket
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Escucha de eventos desde el cliente
  socket.on('nuevoProducto', (producto) => {
    // Emitir el evento a todos los clientes conectados
    io.emit('productoCreado', producto);
  });

  socket.on('eliminarProducto', (productoId) => {
    // Emitir el evento a todos los clientes conectados
    io.emit('productoEliminado', productoId);
  });

  // Manejo de la desconexión de un cliente
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Configuración de las rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts');
});

// Iniciar el servidor
server.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
