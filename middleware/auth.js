const jwt = require('jsonwebtoken');

const verifyAuth = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "యాక్సెస్ లేదు. టోకెన్ ఇవ్వండి." });

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified; 
        next();
    } catch (err) {
        res.status(400).json({ error: "ఇన్‌వాలిడ్ టోకెన్" });
    }
};

module.exports = verifyAuth;