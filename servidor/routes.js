const express = require('express');
const router = express.Router();
const Producto = require('./models/Producto');
const { json } = require('body-parser');

//Rutas
router.get('/productos', async (res) => {
    const productos = await Producto.find();
    res.json(productos);
});

router.get('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Productos no encontrados'});

        }
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
})

router.post('/productos', async (req, res) => {
    const nuevoProducto = new Producto(req.body);
    try {
        const producto = await nuevoProducto.save();
        res.status(201),json(producto);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

router.put('/productos/:id', async (req, res) => {
    if(producto){
        res.json(producto);
    } else {
        res.status(404).json({ message: error.message});
    }
});

router.delete('/productos/:id', async (req, res) => {
    try {
        const producto = await Producto.findByIdAndRemove(req.params.id);
        if (producto) {
            res,json({ message: 'Producto eliminado'});
        } else {
            res.status(404).json({ message: 'Producto no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
});

module.exports = router;