const Genome = require("../models/genome.js");
const decodeBase64 = (compressedData) => {
    try {
        return Buffer.from(compressedData, "base64").toString("utf-8");
    } catch (error) {
        console.error("Decoding error:", error.message);
        return null;
    }
};

// Fetch genome object by sequence_id
const getGenomeBySequenceId = async (req, res) => {
    try {
        const { sequence_id } = req.params;

        // Explicitly searching for genome where sequence_id matches
        const genomeDoc = await Genome.findOne({ sequence_id });

        if (!genomeDoc) {
            return res.status(404).json({ message: "Genome not found" });
        }

        // Convert to plain JS object to prevent mutation
        const genome = genomeDoc.toObject();

        // Decode Base64 sequence safely
        genome.compressed_sequence = decodeBase64(genome.compressed_sequence) || "Decoding failed";

        res.json(genome);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { getGenomeBySequenceId };
