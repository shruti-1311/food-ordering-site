
const Events = require("../models/event.model.js");
const { findById } = require("../models/ingredientCategory.model");
const Restaurant = require("../models/restaurant.model.js");

module.exports = {

    async createEvent(event,restaurantId) {
        try {
            const restaurant = await Restaurant.findById(restaurantId);
            if(!restaurant){
                throw new Error(`Restaurant not found with ID ${restaurantId}`);
            }

            const createdEvent = new Events({
                restaurant : restaurantId,
                image : event.image,
                startedAt: event.startedAt,
                endsAt: event.endsAt,
                location: event.location,
                name: event.name
            });

            await createdEvent.save();
            return createdEvent;
        } catch (error) {
            throw new Error(`Failed to create event: ${error.message}`);
        }
    },
    async findRestaurantsEvent(restaurantId) {
        try {
            const events = await Events.find({ restaurant: restaurantId });
            return events;
        } catch (error) {
            throw new Error(`Failed to find events for restaurant ID ${restaurantId}: ${error.message}`);
        }
    },

    async deleteEvent(eventId) {
        try {
            await Events.findByIdAndDelete(eventId);
        } catch (error) {
            throw new Error(`Failed to delete event with ID ${eventId}: ${error.message}`);
        }
    },

    async findById(eventId) {
        try {
            const event = await Events.findById(eventId);
            if(!event) {
                throw new Error(`Event not found with ID ${eventId}`);
            }
            return event;
        } catch (error) {
            throw new Error(`Failed to find event with ID ${eventId}: ${error.message}`);
        }
    }
};