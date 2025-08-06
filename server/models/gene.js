const mongoose = require("mongoose");

const GeneSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    gene_name: String,
    genomic_location: {
        contig: String,
        start: Number,
        end: Number,
        strand: String
    },
    gene_type: String,
    biotype_classification: String,
    species: String,
    strain: String
}, { collection: "genes" });

const Gene = mongoose.model("Gene", GeneSchema);
module.exports = Gene;
