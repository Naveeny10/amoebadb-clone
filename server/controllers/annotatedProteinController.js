const AnnotatedProtein = require("../models/annotated_protein");

const decodeBase64 = (compressedData) => {
    try {
        return Buffer.from(compressedData, "base64").toString("utf-8");
    } catch (error) {
        console.error("Decoding error:", error.message);
        return null; 
    }
};


const getAnnotatedProteinByGeneId = async (req, res) => {
    try {
        const { gene_id } = req.params;
        const protein = await AnnotatedProtein.findOne({ gene_id });

        if (!protein) {
            return res.status(404).json({ message: "Annotated protein not found" });
        }

        res.json({
            ...protein.toObject(),
            compressed_sequence: decodeBase64(protein.compressed_sequence) || "Decoding failed",
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const getAnnotatedProteinByProteinId = async (req, res) => {
    try {
        const { protein_id } = req.params;
        const protein = await AnnotatedProtein.findOne({ protein_id });

        if (!protein) {
            return res.status(404).json({ message: "Annotated protein not found" });
        }

        res.json({
            ...protein.toObject(),
            compressed_sequence: decodeBase64(protein.compressed_sequence) || "Decoding failed",
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const getAnnotatedProteinByTranscriptId = async (req, res) => {
    try {
        const { transcript_id } = req.params;
        const protein = await AnnotatedProtein.findOne({ transcript_id });

        if (!protein) {
            return res.status(404).json({ message: "Annotated protein not found" });
        }

        res.json({
            ...protein.toObject(),
            compressed_sequence: decodeBase64(protein.compressed_sequence) || "Decoding failed",
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { 
    getAnnotatedProteinByGeneId, 
    getAnnotatedProteinByProteinId, 
    getAnnotatedProteinByTranscriptId 
};
