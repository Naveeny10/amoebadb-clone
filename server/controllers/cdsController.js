const CDS = require("../models/annotated_cds");


const decodeBase64 = (compressedData) => {
    try {
        return Buffer.from(compressedData, "base64").toString("utf-8");
    } catch (error) {
        console.error("Decoding error:", error.message);
        return null;
    }
};

// Fetch CDS by cds_id
const getCDSByCdsId = async (req, res) => {
    try {
        const { cds_id } = req.params;
        const cds = await CDS.findOne({ cds_id: cds_id }); // Explicitly searching by field
        console.log(cds_id);
        
        if (!cds) {
            return res.status(404).json({ message: `CDS with cds_id ${cds_id} not found` });
        }

        // Convert to plain object to prevent mutation
        const cdsObject = cds.toObject();

        // Decode and update compressed_sequence
        cdsObject.compressed_sequence = decodeBase64(cdsObject.compressed_sequence) || "Decoding failed";

        res.json({
            message: `CDS found for cds_id ${cds_id}`,
            cds: cdsObject
        });
    } catch (error) {
        console.error("Error fetching CDS by cds_id:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {
    getCDSByCdsId,
};
