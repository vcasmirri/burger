// Import Express and burger.js

var express = require("express");

var router = express.Router();

var burgerFunctions = require("..models/burger.js");

// Create routes and set up logic within routes

router.get("/", function(req, res) {
    burgerFunctions.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){
    burgerFunctions.insertOne(req.body.burger_name), function(){
        res.redirect("/");
    };
});

router.put("/:id", function(req, res){
    var condition = req.params.id;
    burgerFunctions.updateOne(condition, function(){
        res.redirect("/");
    });
});

// Export the router
module.exports = router;