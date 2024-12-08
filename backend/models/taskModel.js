const mongoose = require('mongoose');

const Schema = mongoose.Schema

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Task', taskSchema)