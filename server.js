const express = require("express");
const app = express();
const PORT = process.env.PORT  || 3000;

app.use(express.json());
app.use(express.static("public"));
let products = [
  {
    id: 1,
    name: "Mechanical Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    description:
      "Experience the ultimate blend of speed, tactile satisfaction, and durability. Built with ultra-responsive mechanical switches, customizable RGB backlighting, and a premium ergonomic frame, this keyboard is engineered to transform the way you game, code, and type. Say goodbye to mushy keys and step up your desk setup today.",
    price: 75,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
    description:
      "Experience complete freedom and pixel-perfect accuracy. Designed for seamless tracking on virtually any surface, this high-performance wireless mouse combines a lag-free connection with an ultra-comfortable contoured grip. Whether you're navigating massive spreadsheets or grinding through late-night gaming sessions, enjoy effortless control without the clutter.",
    price: 30,
  },
];

app.get("/products", function (req, res) {
  return res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  const rawId = req.params.id;
  const ProductId = parseInt(rawId);
  const product = products.find((p) => p.id == ProductId);

  if (!product) {
    return res.status(404).json({ error: "Product Not Found" });
  }
  return res.status(200).json(product);
});

app.post("/products", function (req, res) {
  if (!req.body) {
    return res.status(400).json({ error: "Request body is missing" });
  }

  const { name, description, price, image } = req.body;

  if (!name || !price || !description) {
    return res
      .status(400)
      .json({ error: "Name, Price and Description are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name: name,
    image: image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    description: description,
    price: price,
  };

  products.push(newProduct);
  return res.status(201).json(newProduct);
});

app.patch("/products/:id", (req,res) => {
      const productId = parseInt(req.params.id);
      const product = products.find((p) => p.id === productId);

      if (!product){
        return res.status(404).json({error: "Product Not Found"});
      }
        const {name , description, price, image} = req.body;

        if(name !== undefined) product.name = name;
        if(description !== undefined) product.description = description;
        if(price !== undefined) product.price = Number(price);
        if(image !== undefined) product.image = image;
        return res.status(200).json(product);
});

app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const initialLength = products.length;

  products = products.filter((p) => p.id !== productId);

  if (products.length === initialLength) {
    return res.status(404).json({ error: "Product not found" });
  }

  return res.status(200).json({ message: "Product deleted successfully" });
});

app.listen(PORT, function () {
  console.log(`Server running on Server running on port :${PORT}`);
});
