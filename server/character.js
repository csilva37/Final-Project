const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    classDND: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        required: true
    },
    dexterity: {
        type: Number,
        required: true
    },
    constitution: {
        type: Number,
        required: true
    },
    wisdom: {
        type: Number,
        required: true
    },
    intelligence: {
        type: Number,
        required: true
    },
    charisma: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    alignment: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Character', characterSchema);