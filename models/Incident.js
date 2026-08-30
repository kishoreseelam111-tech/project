const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
    short_description: { type: String, required: true },
    description: { type: String },
    state: { type: String, default: "New" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Incident', IncidentSchema);