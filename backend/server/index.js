import express from "express"; // setting up web server
import dotenv from "dotenv"; // importing and configuring dotenv so it can read environment variables from a .env file like PORT=6000

dotenv.config(); // configuring dotenv

const app = express(); // creating an express app

console.log("PORT from env:", process.env.PORT);

// path is /, which is the homepage of your backend
// if someone visits http://localhost:6000/ function runs

// setting up an HTTP GET route
// req object = info from the client, headers, query, params
// res = sends data back to the client
app.get("/", (req, res) => {
    res.send("Welcome to the license Plate Tracker API!");
});

import connectDB from "../database/database.js";
connectDB();

app.listen(process.env.PORT, () => { // starting a server on the port defined in .env
    console.log("App is running at port", process.env.PORT); // logging the message
});