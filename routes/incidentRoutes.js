const express = require('express');
const router = express.Router();
const { createIncident } = require('../controllers/incidentController');
const verifyAuth = require('../middleware/auth');

// ఇన్సిడెంట్ క్రియేట్ చేయడానికి ముందు verifyAuth మిడిల్‌వేర్ రన్ అవుతుంది
router.post('/incident', verifyAuth, createIncident);

module.exports = router;