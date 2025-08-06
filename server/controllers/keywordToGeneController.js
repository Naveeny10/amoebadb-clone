const KeywordToGene = require("../models/keyword_to_gene");

// Fetch all gene IDs associated with a keyword
const getAllGeneIdsByKeyword = async (req, res) => {
    try {
        const { keyword } = req.params;
        const keywordEntry = await KeywordToGene.findOne({ keyword: keyword });

        if (!keywordEntry) {
            return res.status(404).json({ message: `No genes found for keyword: ${keyword}` });
        }
        
        res.json({
            message: `Genes found for keyword: ${keyword}`,
            gene_ids: keywordEntry.gene_id 
        });
    } catch (error) {
        console.error("Error fetching gene IDs by keyword:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Fetch only the first 10 gene IDs for a keyword
const getTop10GeneIdsByKeyword = async (req, res) => {
    try {
        const { keyword } = req.params;
        const keywordEntry = await KeywordToGene.findOne({ keyword: keyword });

        if (!keywordEntry) {
            return res.status(404).json({ message: `No genes found for keyword: ${keyword}` });
        }

        res.json({
            message: `Top 10 genes found for keyword: ${keyword}`,
            gene_ids: keywordEntry.gene_id.slice(0, 10) // Return only first 10 gene IDs
        });
    } catch (error) {
        console.error("Error fetching top 10 gene IDs by keyword:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};




module.exports = {
    getAllGeneIdsByKeyword,
    getTop10GeneIdsByKeyword
};
