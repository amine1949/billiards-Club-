const express = require('express');
const cors = require('cors');
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Router
app.use('/api', require('./routes/tournamentRoutes'))



//Simple test route
app.get('/', (req, res) => {
    res.send('Express + MongoDB Api');
});

//Error Handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke!'+ err);
});

module.exports = app;