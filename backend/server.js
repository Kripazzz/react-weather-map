const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 5000; // or your desired port

app.get('/api/weather/:city', async (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY; // Accessing the API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data); // Send the weather data as a JSON response
    } catch (error) {
        console.error("Error fetching data from weather API:", error.message);
        res.status(500).json({ error: "Error fetching data from weather API." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
























// // backend/server.js
// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Weather API endpoint
// app.get("/api/weather/:city", async (req, res) => {
//     const city = req.params.city;
//     const apiKey = process.env.WEATHER_API_KEY; // Store your API key in a .env file
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


//     try {
//         const response = await axios.get(url);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ error: "Error fetching data from weather API." });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
