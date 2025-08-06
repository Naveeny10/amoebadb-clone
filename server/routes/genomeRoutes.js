const express = require("express");
const { getGenomeBySequenceId } = require("../controllers/genomeController");

const router = express.Router();

// Route to fetch genome by sequence_id
router.get("/:sequence_id", getGenomeBySequenceId);

module.exports = router;
