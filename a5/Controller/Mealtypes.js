const Mealtype = require("../Model/Mealtype.json")

exports.getMealtypes = (req, res) => {
    res.status(200).json({
        message : "mealType loaded successfully",
        mealtypes : Mealtype
    })

}