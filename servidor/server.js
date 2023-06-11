const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

app.use('/api', routes);

mongoose.connect('mongodb://localhost/tienda-online', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch((err) => console.log(err));

app.use(express.json());
