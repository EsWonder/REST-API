// Importar Express
const express = require('express');

// Crear una aplicación de Express
const app = express();

// Definir un puerto
const PORT = 3000;

const cors = require('cors');
app.use(cors());

// Crear una ruta para "Hola Mundo"
app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde una REST API!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

