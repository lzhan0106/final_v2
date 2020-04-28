const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    numberOfDeath: String,
    timeOfPlaying: String,
    nameOfGame: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;