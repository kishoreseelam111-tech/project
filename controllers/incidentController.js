const Incident = require('../models/Incident');

exports.createIncident = async (req, res) => {
    try {
        const { short_description, description } = req.body;
        const newIncident = new Incident({
            short_description,
            description,
            user_id: req.user.id
        });
        await newIncident.save();
        res.status(201).json({ message: "ఇన్సిడెంట్ క్రియేట్ అయింది", incident: newIncident });
    } catch (error) {
        res.status(500).json({ error: "ఇన్సిడెంట్ క్రియేట్ చేయడంలో ఎర్రర్" });
    }
};