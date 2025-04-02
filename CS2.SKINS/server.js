const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/api/market", async (req, res) => {
    try {
        const response = await fetch("https://steamcommunity.com/market/search/render/?query=&start=0&count=10&search_descriptions=0&sort_column=popular&sort_dir=desc&appid=730", {
            headers: {
                "Accept": "application/json",
                "User-Agent": "Mozilla/5.0"
            }
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const data = await response.json();
        res.json(data.results);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener datos de Steam" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));
