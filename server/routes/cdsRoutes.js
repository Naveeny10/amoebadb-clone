const express = require("express");
const { getCDSByCdsId } = require("../controllers/cdsController");

const router = express.Router();

router.get("/:cds_id", getCDSByCdsId);

module.exports = router;
