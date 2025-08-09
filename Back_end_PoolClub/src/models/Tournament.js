const mongoose = require('mongoose');

const TournamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a tournament name']
    },
    description: {
        type: String,
        required: [true, 'Please enter a tournament description']
    },
    title: {
        type: String
    },
    date: {
        type: Date
    },
    maxParticipants: {
        type: Number,
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    status: {
        type: String,
        enum: ['active', 'finished'],
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Tournament', TournamentSchema);