const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "యూజర్ రిజిస్టర్ అయ్యారు" });
    } catch (error) {
        res.status(500).json({ error: "రిజిస్ట్రేషన్ ఫెయిల్ అయింది" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "యూజర్ లేరు" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "పాస్‌వర్డ్ తప్పు" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "లాగిన్ సక్సెస్", token });
    } catch (error) {
        res.status(500).json({ error: "లాగిన్ ఎర్రర్" });
    }
};