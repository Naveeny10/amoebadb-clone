const express = require("express");
const { 
    getTranscriptByTranscriptId, 
    getTranscriptByGeneId 
} = require("../controllers/transcriptController");

const router = express.Router();

// Routes to fetch transcript by transcript_id and gene_id
router.get("/:transcript_id", getTranscriptByTranscriptId);
router.get("/gene/:gene_id", getTranscriptByGeneId);

module.exports = router;
