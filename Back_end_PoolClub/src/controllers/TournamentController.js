const Tournament = require('../models/Tournament');
const {upload, processImage} = require('../utils/fileUpload');

//Create a New Tournament
exports.createTournament = async (req, res) => {
    try{

        let imageUrl;
        if(req.file) {
            console.log('Processing image:', req.file.path);
            imageUrl = await processImage(req.file);
        }

        const tournamentData = {
            ...req.body,
            image: imageUrl || undefined
        };

        const tournament = new Tournament(tournamentData);
        const newTournament = await tournament.save();
        delete newTournament.__v;
        res.status(201).json({
            success: true,
            message: 'Tournament Created successfully',
            data: newTournament
        });
    }catch (e) {
        console.error('Error in createTournament:', e); // Debug
        res.status(500).json({ error: e.message });
    }
}

//get All Tournament
exports.getAllTournament = async (req, res) => {
    try {
        const tournaments = await Tournament.find().select('-__v').lean();
        res.status(200).json({
            success: true,
            count: tournaments.length,
            data: tournaments
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

//Update Tournament
exports.updateTournament = async (req, res) => {
    try {

        let updateData = {...req.body};

        if(req.file) {
            updateData.image = await processImage(req.file);
        }

        const tournament = await Tournament.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );
pmp
        if(!tournament) {
            return res.status(404).json({
                success: false,
                message: 'Tournament not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Tournament updated successfully',
            data: tournament
        });
    }catch (e) {
        res.status(500).json({
            success: false,
            message: 'Server error while updating tournament',
            error: e.message
        })
    }
};

//Delete Tournament
exports.deleteTournament = async (req, res) => {
    try {
        const tournament = await Tournament.findByIdAndDelete(req.params.id);
        if(!tournament) {
            return res.status(404).json({
                success: false,
                message: 'Tournament not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Tournament deleted successfully'
        })
    }catch (e) {
        res.status(500).json({
            success: false,
            message: 'Server error while deleting tournament',
            error: e.message
        })
    }
}

//Get Tournament By Id
exports.getTournament = async (req, res) => {
    try {
        const tournament = await Tournament.findById(req.params.id);
        if(!tournament) {
            return res.status(404).json({
                success: false,
                message: 'Tournament not found'
            });
        }
        res.status(200).json({
            success: true,
            data: tournament
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Server error while getting tournament',
            error: e.message
        })
    }
}