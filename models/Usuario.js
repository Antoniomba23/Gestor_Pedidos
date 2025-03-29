const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  direccion: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'Usuarios'); // 'Usuarios' es el nombre de la colección