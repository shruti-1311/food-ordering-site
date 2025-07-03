const Food = require("../models/food.model.js");

module.exports = {
    async createFood(req, restaurant) {
        try {
            const food = new Food({
                foodCategory: req.category,
                creationDate : new Date(),
                description: restaurant.description,
                images: restaurant.images,
                name : restaurant.name,
                price : res.price,
                isSeasonal : res.isSeasonal,
                isVegetarian: res.isVegetarian,
                restaurant : restaurant._id,
                ingredients : res.ingredients,
            });
            await food.save();
            restaurant.food.push(food._id);
            await restaurant.save();
            return food;
            
        } catch (error) {
            throw new Error(`Failed to create food: ${error.message}`);
        }
    },

    async deleteFood(foodId){
        try {

            const food = await Food.findById(foodId);
            if(!food){
                throw new Error(`Food not found with ID ${foodId}`);
            }
            food.restaurant = null;
            await food.save();
            await Food.findByIdAndDelete(foodId);

            
        } catch (error) {
            throw new Error(
                `Failed to delete food wuth ID ${foodId}: ${error.message}`
            );
        }
    },

    async getRestaurantsFood(
        restaurantId,
        Vegetarian,
        nonveg,
        seasonal,
        foodCategory
    ){
        try {

            let query = { restaurants: restaurantId };
            console.log(nonveg)
            if(Vegetarian == "true") {
                query.isVegetarian = true;
            }

            if(nonveg == "true") query.Vegetarian = false;
            if(seasonal == "true") query.isSeasonal = true;
            if(foodCategory == "true") query.foodCategory = foodCategory;
            
            const foods = await Food.find(query).populate([
                { path: "ingredients",populate: { path: "category", select: "name" } },
                "foodCategory",
                { path: "restaurant", select: "name _id" },
            ]);
            return foods;
        } catch (error) {
            throw new Error(`failed to retrive restaurant's food: ${error.message}`);
            
        }
    },

    async searchFood(keyword) {
        try {

            let query = {};
            if(keyword) {
                query.$or = [
                    {name: {$regex: keyword, $options: "i" } },
                    { "foodCategory.name" : {$regex: keyword, $options: "i"} },
                ];
            }

            const foods = await Food.find(query);
            return foods;
            
        } catch (error) {
            throw new Error(`Failed to search for food: ${error.message}`);
            
        }
    },

    async updateAvailabilityStatus(foodId) {
        try {
            const food = await Food.findById(foodId).populate([
                { path: "ingredients", populate: { path: "category", select: "name"} },
                "foodCategory",
                { path: "restaurant", select: "name _id" },
            ]);
            if(!food) {
                throw new Error(`Food Not Found with ID ${foodId}`);
            }
            food.available = !food.available;
            await food.save();
            return food;

            
        } catch (error) {
            throw new Error(
                `Failed to update availability status for food with ID ${foodId}: ${error.message}`
            );
        }
    },

    async findFoodById(foodId) {
        try {

            const food = await Food.findById(foodId);
            if(!food) {
                throw new Error(`food not found with ID ${foodId}`);
            }
            return food;
            
        } catch (error) {
            throw new error(
                `failed to find food with ID ${foodId}: ${error.message}`
            );
            
        }
    },
};