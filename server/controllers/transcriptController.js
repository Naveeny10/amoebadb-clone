const Transcript = require("../models/annotated_transcript");

// Utility function to decode Base64 sequence
const decodeBase64 = (compressedData) => {
    try {
        return Buffer.from(compressedData, "base64").toString("utf-8");
    } catch (error) {
        console.error("Decoding error:", error.message);
        return null; 
    }
};

// Fetch transcript by transcript_id
const getTranscriptByTranscriptId = async (req, res) => {
    try {
        const { transcript_id } = req.params;
        const transcript = await Transcript.findOne({ transcript_id: transcript_id });

        if (!transcript) {
            return res.status(404).json({ message: `Transcript with transcript_id ${transcript_id} not found` });
        }

        // Convert to plain object to prevent mutation
        const transcriptObject = transcript.toObject();

        // Decode and update compressed_sequence
        transcriptObject.compressed_sequence = decodeBase64(transcriptObject.compressed_sequence) || "Decoding failed";

        res.json({
            message: `Transcript found for transcript_id ${transcript_id}`,
            transcript: transcriptObject
        });
    } catch (error) {
        console.error("Error fetching transcript by transcript_id:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Fetch transcripts by gene_id
const getTranscriptByGeneId = async (req, res) => {
    try {
        const { gene_id } = req.params;
        const transcripts = await Transcript.find({ gene_id: gene_id });

        if (!transcripts || transcripts.length === 0) {
            return res.status(404).json({ message: `No transcripts found for gene_id ${gene_id}` });
        }

        // Convert each document to a plain object and decode sequences
        const transcriptsArray = transcripts.map((transcript) => {
            const transcriptObject = transcript.toObject();
            transcriptObject.compressed_sequence = decodeBase64(transcriptObject.compressed_sequence) || "Decoding failed";
            return transcriptObject;
        });

        res.json({
            message: `Transcripts found for gene_id ${gene_id}`,
            transcripts: transcriptsArray
        });
    } catch (error) {
        console.error("Error fetching transcripts by gene_id:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {
    getTranscriptByTranscriptId,
    getTranscriptByGeneId,
};
