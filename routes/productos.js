const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

// Ruta para obtener todos los productos y mostrar la lista
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.render('productos', { productos: productos }); // Pasa los productos a la vista
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para mostrar el formulario de edición de un producto
router.get('/editar/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.render('editarProducto', { producto: producto }); // Renderiza un formulario de edición
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para actualizar un producto existente
router.post('/editar/:id', async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.redirect('/productos'); // Redirige a la lista de productos
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para eliminar un producto
router.post('/eliminar/:id', async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.redirect('/productos'); // Redirige a la lista de productos
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para crear un nuevo producto
router.post('/', async (req, res) => {
  const nuevoProducto = new Producto(req.body);

  try {
    await nuevoProducto.save();
    res.redirect('/productos'); // Redirige a la lista de productos
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;