const Gene = require("../models/gene"); 

// Function to fetch a gene by ID
const getGeneById = async (req, res) => {
    try {
        const { gene_id } = req.params; // Extract ID from request parameters
        const gene = await Gene.findOne({ _id: gene_id });
        console.log(gene_id);
        
        if (!gene) {
            return res.status(404).json({ message: "Gene not found" });
        }

        res.status(200).json(gene.toObject()); // Convert to plain JavaScript object before sending
    } catch (error) {
        console.error("Error fetching gene by ID:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

module.exports = { getGeneById };
