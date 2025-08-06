import express from "express";
import { stringify } from "querystring";

const app = express();
const PORT = 3333;
app.use(express.json());

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    console.log(`ID: ${id}`);
    res.send("Produto escolhido: " + id);
});

app.get("/products", (req, res) => {
    const { page, limit } = req.query;
    res.send(`Página: ${page}, Limite: ${limit}`);
});

app.post("/products", (req, res) => {

    const { name, price } = req.body;
    // res.send(`Nome: ${name}, Preço: ${price}`);
    res.json({ name, price });
});

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
