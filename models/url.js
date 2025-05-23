const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: { // Make sure this name matches the controller and index.js
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
},
{ timestamps: true }
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
