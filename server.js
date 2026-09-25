const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
    { id: 1, name: "Mechanical Keyboard", price: 75 },
    { id: 2, name: "Wireless Mouse", price: 30 }
];

app.get("/products", function (req, res) {
    return res.status(200).json(products);
});

app.post('/products', function (req, res) {
    if (!req.body) {
        return res.status(400).json({ error: "Request body is missing" });
    }

    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: "Name and price are required" });
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(newProduct);
    return res.status(201).json(newProduct);
});

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});