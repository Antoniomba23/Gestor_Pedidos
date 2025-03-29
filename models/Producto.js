const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  stock: Number,
});

module.exports = mongoose.model('Producto', ProductoSchema, 'Productos'); // 'Productos' es el nombre de la colección