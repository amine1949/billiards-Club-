const app = require('./app');
const connectMongoDB = require("./config/db");
const express = require("express");
const PORT = process.env.PORT || 8000;


//Connect DB
connectMongoDB();

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});