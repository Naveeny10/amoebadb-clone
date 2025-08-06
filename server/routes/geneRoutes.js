const express = require("express");
const { getGeneById } = require("../controllers/geneController");
// const { createGene } = require("../controllers/geneController");
const router = express.Router();


router.get("/:gene_id", getGeneById);
// router.post("/genes", createGene);


module.exports = router;
