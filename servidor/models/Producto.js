const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, required: true },
    imagen: { type: String, required: true },
    distribuidor: { type: String, required: true },
});

module.exports = mongoose.model('Producto', ProductoSchema);
