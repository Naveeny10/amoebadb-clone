const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Transcript = require("../models/annotated_transcript");
const Gene = require("../models/gene");
dotenv.config();
const MONGO_URI = process.env.MONGO_URI
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

  
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
