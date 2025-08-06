const mongoose = require("mongoose");

const GenomeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sequence_id: String,
    organism: String,
    strain: String,
    version: String,
    length: Number,
    type: String,
    compressed_sequence: String
}, { timestamps: true });

const Genome = mongoose.model("Genome", GenomeSchema);
module.exports = Genome;
