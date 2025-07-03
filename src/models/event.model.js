const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    image: String,
    startedAt:String,
    endsAt:String,
    name : String,
    restaurant : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
    location:String,
});

const Events = mongoose.model('Events', EventSchema);
module.exports = Events;
