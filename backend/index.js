require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;

const app = express();



app.listen(PORT, () => {
    console.log("Server is running on port 3002");
    mongoose.connect(uri);
    console.log("Connected to MongoDB");
});

