const expresss = require('express');
const app = expresss();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

//conexion a la DB

//middleware
app.use(express.json());
app.use(expresss.urlencoded({ extended: true }));
app.use(cors());

//routes


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})