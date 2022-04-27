const Location = require("../Model/Location.json")

// API export the controller functionality
exports.getLocations = (req, res) => {
    const result = Location.map(item => item.name)
    res.status(200).json({
        message : "Location list loaded successfully",
        location : result
    })

}