let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,

router.get('/products', (req, res) => {
    res.json(products);
})

//2. Obtener un producto específico mediante su ID “/api/products/:id”

router.get('/products/:id', (req, res) => {
    let { id } = req.params
    let result = products.find(prod => prod.id == id);

    res.json([result]);
})

// router.get('/products/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     let product = products.filter (prod => prod.id == id)
//     res.send(product);
// })

//3. Agregar un nuevo producto “/api/products”

router.post('/products/add', (req, res) => {
    let { name, price, quantity, color } = req.body;
    products.push({name, price, quantity, color});
    res.send(products);
})

//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,

// router.put('/products/:id/:name', (req, res) => {
//     const { id, name } = req.params;

//     const prod = products.find(pdt => pdt,id === parseInt(id));
//     prod.name = name;
//     res.json(prod);
// })}

router.put('/products/:id/:name', (req, res) => {
    const {id, name} = req.params
    const result = products. find(pct => pct. id === parseInt (id))

    result.name = name
    res.json(result)
})

//5. Eliminar un producto mediante su ID “/api/products/:id”,

router.delete('/products/:id', (req, res) => {
    const { id } = parseInt(res.params);

    let newArray = products.filter(prod => {
        prod.id !== id;
    })

    res.send(newArray)

    
})

module.exports = { router, products };
