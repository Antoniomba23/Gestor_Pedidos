# 🚀 Gestor de Pedidos

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Sistema completo para gestión de pedidos, productos y usuarios desarrollado con tecnologías modernas.

## ✨ Características Principales

- 📦 **Gestión de Productos**
  - Agregar nuevos productos
  - Editar información existente
  - Eliminar productos del sistema
- 👥 **Gestión de Usuarios**
  - Registro y administración de usuarios
  - Edición de perfiles
  - Eliminación controlada
- 🖥 **Interfaz Intuitiva**
  - Vistas renderizadas con EJS
  - Diseño responsive
- 🗄 **Base de Datos en la Nube**
  - MongoDB Atlas para almacenamiento seguro
  - Modelos con Mongoose

## 🛠 Tecnologías Utilizadas

| Tecnología       | Descripción                           |
|------------------|---------------------------------------|
| Node.js          | Entorno de ejecución JavaScript       |
| Express          | Framework para aplicaciones web       |
| Mongoose         | ODM para MongoDB                      |
| MongoDB Atlas    | Base de datos en la nube              |
| EJS              | Motor de plantillas                   |
| dotenv           | Manejo de variables de entorno        |

## 📋 Requisitos Previos

- Node.js (v14+ recomendado)
- npm (v6+)
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## 🚀 Instalación y Configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://tu-repositorio.com/gestor-pedidos.git
   cd gestor-pedidos
   Instalar dependencias

bash
Copy
npm install
Configurar variables de entorno

Crear archivo .env en la raíz

Configurar acceso a MongoDB:

env
Copy
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/dbname?retryWrites=true&w=majority
PORT=3000
SESSION_SECRET=tu_secreto_aqui
Iniciar la aplicación

bash
Copy
npm start
Para desarrollo con recarga automática:

bash
Copy
nodemon start
🌐 Uso del Sistema
Accede a la aplicación en http://localhost:3000

Navega por las diferentes secciones:

🏠 Página principal

📦 Gestión de productos

👥 Administración de usuarios

Utiliza los formularios para:

➕ Agregar nuevos registros

✏️ Editar información existente

❌ Eliminar entradas

📂 Estructura del Proyecto
gestor-pedidos/
├── public/               # Recursos estáticos
│   ├── css/              # Estilos CSS
│   ├── js/               # Scripts del cliente
│   └── images/           # Assets visuales
├── views/                # Vistas EJS
│   ├── layouts/          # Plantillas base
│   ├── partials/         # Componentes reutilizables
│   ├── productos/        # Vistas de productos
│   └── usuarios/         # Vistas de usuarios
├── routes/               # Definición de rutas
│   ├── api/              # Endpoints API
│   ├── productos.js      # Rutas productos
│   └── usuarios.js       # Rutas usuarios
├── models/               # Modelos de datos
│   ├── Producto.js       # Modelo Producto
│   └── Usuario.js        # Modelo Usuario
├── middlewares/          # Middlewares custom
├── app.js                # Configuración principal
├── package.json          # Dependencias y scripts
└── README.md             # Documentación
👨‍💻 Desarrollador
[Antonio MBA] - [antoniomba278@gmail.com] - [@antoniomba23]
