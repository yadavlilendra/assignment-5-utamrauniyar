const Restaurants = require("../Model/Restaurants.json")

exports.getRestaurants = (req, res) => {
    const cityName = req.params.name
    const result = Restaurants.filter(item => item.city_name == cityName)
    res.status(200).json({
        message : "Restaurant list fetched by location",
        restaurant : result
    })       
}

