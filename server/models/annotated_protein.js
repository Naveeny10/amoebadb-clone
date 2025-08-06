const mongoose = require("mongoose");

const AnnotatedProteinSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    protein_id: String,
    transcript_id: String,
    gene_id: String,
    organism: String,
    gene_product: String,
    transcript_product: String,
    protein_length: Number,
    sequence_type: String,
    feature_type: String,
    is_pseudo: Boolean,
    strain: String,
    genomic_location: {
        contig: String,
        start: Number,
        end: Number,
        strand: String
    },
    compressed_sequence: String
}, { collection: "annotated_proteins" });

const AnnotatedProtein = mongoose.model("AnnotatedProtein", AnnotatedProteinSchema);
module.exports = AnnotatedProtein;
