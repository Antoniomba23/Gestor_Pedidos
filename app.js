const express = require('express');
const mongoose = require('mongoose');
const productosRouter = require('./routes/productos');
const usuariosRouter = require('./routes/usuarios');
require('dotenv').config();

// Configurar strictQuery para evitar advertencias
mongoose.set('strictQuery', false);

const app = express();

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para procesar datos de formularios

// Conexión a MongoDB Atlas
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error conectando a MongoDB Atlas:', err);
  });

// Rutas
app.use('/productos', productosRouter);
app.use('/usuarios', usuariosRouter);

// Servir archivos estáticos
app.use(express.static('public'));

// Ruta principal (página de inicio)
app.get('/', (req, res) => {
  res.render('index', { title: 'Inicio' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});