const express = require("express");
const { 
    getAllGeneIdsByKeyword,
    getTop10GeneIdsByKeyword, 
    lazySearchGenes
} = require("../controllers/keywordToGeneController");

const router = express.Router();

// Routes to fetch gene IDs by keyword
// router.get("/search/:key",lazySearchGenes)
router.get("/:keyword", getAllGeneIdsByKeyword);
router.get("/first10/:keyword", getTop10GeneIdsByKeyword);

module.exports = router;
