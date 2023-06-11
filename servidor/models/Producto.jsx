const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    distribuidor: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('Producto', ProductoSchema);