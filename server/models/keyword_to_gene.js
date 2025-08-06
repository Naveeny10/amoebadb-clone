const mongoose = require("mongoose");

const KeywordToGeneSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    keyword: String,
    gene_id: [String]
}, { collection: "keyword_to_gene" });

const KeywordToGene = mongoose.model("KeywordToGene", KeywordToGeneSchema);
module.exports = KeywordToGene;
