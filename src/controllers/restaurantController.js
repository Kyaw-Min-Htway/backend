const Restaurant = require('../models/restaurant');

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: "Server error"});
    }
};

exports.getRestaurantsById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if(!restaurant) return res.status(404).json({ message: "Restaurant not found"});
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ message: "Server error"});
    }
};