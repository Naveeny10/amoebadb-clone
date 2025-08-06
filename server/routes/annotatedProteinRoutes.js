const express = require("express");
const { 
    getAnnotatedProteinByGeneId, 
    getAnnotatedProteinByProteinId, 
    getAnnotatedProteinByTranscriptId 
} = require("../controllers/annotatedProteinController");

const router = express.Router();

router.get("/gene/:gene_id", getAnnotatedProteinByGeneId);
router.get("/:protein_id", getAnnotatedProteinByProteinId);
router.get("/transcript/:transcript_id", getAnnotatedProteinByTranscriptId);

module.exports = router;
