const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    numberOfDeath: String,
    timeOfPlaying: String,
    nameOfGame: String,
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;