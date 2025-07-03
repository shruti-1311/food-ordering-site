const restaurantService = require("../services/RestaurantService");

module.exports={

    createRestaurant:async(req,res)=>{
        try {

            const user= req.user;
            const restaurant = await restaurantService.createRestaurant(req.body,user);
            
        } catch (error) {

            res.status(400).json({error:error.message});
            
        }
    },

deleteRestaurantById: async (req,res) =>{
    try {

        const{id} = req.params;
       
        const user = req.user;
        await restaurantService.deleteRestaurant(id); 

        res.status(200).json({
            message : "Restaurant deleted with id successfully",
            success : true,
        });
        
        
    } catch (error) {
        if(error instanceof Error) {
            res.status(400).json({error : error.message});
        }
        else{

            res.status(500).json({error: "Internal server error"});

        }
        
    }
},

updateRestaurantStatus: async (req,res) => {
    try {

        const{id} = req.params;
        console.log("restaurant Id", id);
        const restaurant = await restaurantService.updateRestaurantStatus(
            id.toString()
        );

        console.log("Restaurant id", id);
        res.status(200).json(restaurant);

        
    } catch (error) {

        if(error instanceof Error){
            res.status(400).json({error : error.message});
        }else{
            res.status(500).json({error: "Internal server error"});
        }
        
    }
},

findRestaurantByUserId: async (req,res) => {
    try {
    const user = req.user;
    const restaurant = await restaurantService.getrestaurantsByUserId(user._id);

    res.status(200).json(restaurant);
    }catch(error){
        if(error instanceof Error) {
            res.status(400).json({error: error.message});
        }else{
            res.status(500).json({ error: "Internal server error "});
        }
    }
},

findRestaurantByName: async (req,res) => {
    try{
        const { keyword } = req.query;
        const restaurants = await restaurantService.searchRestaurant(keyword);
        res.status(200).json(restaurants);

    }catch(error){
        res.status(500).json({error : "Internal server error"});
    }
},

getAllRestaurants : async (req,res) => {
try {

    const restaurants = await restaurantService.getAllRestaurants();
    res.status(200).json(restaurants);
    
} catch (error) {

    res.status(500).json({ error: "Internal server error "});
    
}
},

findRestaurantById: async (req,res) => {
    try {

        const { id } = req.params;
        const restaurant = await restaurantService.findRestaurantById(id);
        res.status(200).json(restaurant);

        
    } catch (error) {

        if(error instanceof Error){
            res.status(400).json({ error: error.message });
        }else{
            res.status(500).json({ error: "Internal server error"});
        }
        
    }
},

addToFavourite: async (req,res) => {

    try {
        
        const { id } = req.params; 
        const user = req.user;
        const restaurant = await restaurantService.addToFavourites(id, user);
        res.status(200).json(restaurant);

        
    } catch (error) {
        if(error instanceof Error){
            res.status(400).json({error: error.message});
        }else{
            res.status(500).json({error: "Internal server error"});
        }
    }
},

};