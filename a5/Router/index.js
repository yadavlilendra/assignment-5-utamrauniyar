const express = require("express")

// initialize the express router
const router = express.Router()

// import the controller componnent
const LocationController = require("../Controller/Locations")
const RestaurantController = require("../Controller/Restaurants")
const MealtypeController = require("../Controller/Mealtypes")

// register the routes
router.get("/getLocations", LocationController.getLocations)
router.get("/getRestaurants", RestaurantController.getRestaurants)
router.get("/getMealtypes", MealtypeController.getMealtypes)

// export the routes
module.exports = router
