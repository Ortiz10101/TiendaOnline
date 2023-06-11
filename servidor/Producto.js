const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: String,
    categoria: String,
    stock: Number,
    imagen: String,
    distribuidor: String,
});

module.exports = mongoose.model('Producto', ProductoSchema);