const mongoose = require("mongoose");
const Restaurant = require("./restaurant.model");

const Categoryschema = new mongoose.Schema({
   name: String,
   restaurant : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
   },
});

const Category = mongoose.model('Category', Categoryschema);
module.exports = Category;