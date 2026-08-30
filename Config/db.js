const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Atlas కనెక్ట్ అయింది');
    } catch (error) {
        console.log("కనెక్షన్ ఎర్రర్:", error);
        process.exit(1);
    }
};

module.exports = connectDB;