const express = require("express");
const {getbook, getbookbyid, createbook, updatebook, deletebook} = require("../controllers/bookcontroller")
const router = express.Router();

router.route("/").get(getbook).post(createbook);

router.route("/:id").get(getbookbyid).put(updatebook).delete(deletebook);

module.exports = router;