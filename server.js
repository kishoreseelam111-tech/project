require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('node:dns');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const incidentRoutes = require('./routes/incidentRoutes');

// DNS Fix
dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();
app.use(cors());
app.use(express.json());

// డేటాబేస్ కనెక్షన్
connectDB();

// రూట్స్ సెటప్ssss
app.use('/api', authRoutes);
app.use('/api', incidentRoutes);

// సర్వర్ స్టార్ట్
//uuu
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("hi")
    //npx plugins add vercel/vercel-plugin
    console.log(`సర్వర్ రన్ అవుతోంది: http://localhost:${PORT}`);
});