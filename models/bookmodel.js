const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const bookschema = mongoose.Schema({
   name: {
    type: String,
    required: [true, "Please add the book name"]
   },
   img: {
    type: String,
    required: [true, "Please add the image link"]
   },
   summary: {
    type: String,
    required: [true, "Please add the book summary"]
   }
},
{
    timestamps: true
});

module.exports = mongoose.model("Book", bookschema);