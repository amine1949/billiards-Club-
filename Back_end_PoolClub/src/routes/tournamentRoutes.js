const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');
const {upload} = require("../utils/fileUpload");

//Tournament Routes
router.get('/tournaments', tournamentController.getAllTournament);
router.post('/createTournament', upload.single('image'), tournamentController.createTournament);
router.put('/updateTournament/:id', upload.single('image'), tournamentController.updateTournament);
router.delete('/deleteTournament/:id', tournamentController.deleteTournament);
router.get('/getTournament/:id', tournamentController.getTournament);


module.exports = router;