const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const DB = require('./src/config/db');
const cors = require('cors');
const brand = require('./src/models/brand');

//conexion a la DB
DB();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/v1/brand', require('./src/routes/brand'));


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})