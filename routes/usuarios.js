const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Ruta para obtener todos los usuarios y mostrar la lista
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.render('usuarios', { usuarios: usuarios }); // Pasa los usuarios a la vista
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para mostrar el formulario de edición de un usuario
router.get('/editar/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.render('editarUsuario', { usuario: usuario }); // Renderiza un formulario de edición
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para actualizar un usuario existente
router.post('/editar/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.redirect('/usuarios'); // Redirige a la lista de usuarios
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para eliminar un usuario
router.post('/eliminar/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.redirect('/usuarios'); // Redirige a la lista de usuarios
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.redirect('/usuarios'); // Redirige a la lista de usuarios
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;