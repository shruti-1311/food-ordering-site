const mongoose = require("mongoose");

const IngredientsItemSchema = new mongoose.Schema({
    name : String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IngredientCategory',
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
    inStoke: {
        type: Boolean,
        default: true,
    },
});

const IngredientsItem = mongoose.model('IngredientsItem',IngredientsItemSchema);
module.exports = IngredientsItem; 