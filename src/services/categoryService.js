
const Category = require("../models/category.model");
const Restaurant = require("../models/restaurant.model");

module.exports = {

    async createCategory(name, userId) {
        try {
           const restaurant = await Restaurant.findOne({ owner: userId });
           if(!restaurant) {
            throw new Error(`Restaurant not found for user ID ${userId}`);
           } 

           const createdCategory = new Category({ name, restaurant: restaurant_.id });
           await createdCategory.save();
           return createdCategory;
        } catch (error) {
            throw new Error(`Failed to create category: ${error.message}`);
        }
    },

    async findCategoryById(categoryId) {
        try {
           const category = await Category.findById(categoryId);
           if(!category) {
            throw new Error(`Category not found with ID ${categoryId}`);
           } 
           return category;
        } catch (error) {
            throw new Error(`Failed to find category with ID ${categoryId}: ${error.message}`);
        }
    }
};