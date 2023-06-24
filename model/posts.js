//import mongoose from "mongoose";
const { mongoose } = require("mongoose")
//const autoIncrement = require('mongoose-auto-increment');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const postSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true
    },
    requiredSkills: [
        String,
    ],
    duration: {
        type: Number,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    stipend: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    postedOn: {
        type: String,
        required: true
    },
    endsIn: {
        type: String,
        required: true
    },
    numberOfPositions: {
        type: String,
        required: true
    },
    totalApplicants: {
        type: String,
        required: true
    },
    aboutUs: {
        type: String,
        required: true
    },
    requirements: {
        type: String,
        required: true
    },
    responsibilities: {
        type: String,
        required: true
    },



}, { timestamp: true }

);

//researcherSchema.plugin(autoIncrement.plugin, {
//    model: 'Researcher',
//    field: 'id',
//    startAt: 5000000,
//    incrementBy: 1
//});



const posts = mongoose.model('Posts', postSchema);
module.exports = posts


