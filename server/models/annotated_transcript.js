const mongoose = require("mongoose");

const TranscriptSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    transcript_id: String,
    gene_id: String,
    length: Number,
    sequence_SO: String,
    SO: String,
    is_pseudo: Boolean,
    compressed_sequence: String
}, { collection: "annotated_transcripts" });

const Transcript = mongoose.model("Transcript", TranscriptSchema);
module.exports = Transcript;
