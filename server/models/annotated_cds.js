const mongoose = require("mongoose");

const CdsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cds_id: String,
    organism: String,
    product: String,
    location: String,
    length: Number,
    sequence_SO: String,
    SO: String,
    is_pseudo: Boolean,
    compressed_sequence: String
}, { collection: "annotated_cds" });

const Cds = mongoose.model("Cds", CdsSchema);
module.exports = Cds;
