const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/database");

const geneRoutes = require("./routes/geneRoutes");
const genomeRoutes = require("./routes/genomeRoutes");
const transcriptRoutes = require("./routes/transcriptRoutes");
const cdsRoutes = require("./routes/cdsRoutes");
const proteinRoutes = require("./routes/annotatedProteinRoutes");
const keywordRoutes = require("./routes/keywordToGeneRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: "http://localhost:3000"
}));

  


connectDB();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/gene", geneRoutes);
app.use("/api/v1/genome", genomeRoutes);
app.use("/api/v1/transcript", transcriptRoutes);
app.use("/api/v1/cds", cdsRoutes);
app.use("/api/v1/protein", proteinRoutes);
app.use("/api/v1/keyword", keywordRoutes);

// Test route to check server status
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 Server is up and running...",
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
