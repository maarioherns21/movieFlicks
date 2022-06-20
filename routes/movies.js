const express  = require("express");
const router = express.Router();
const moviesCtrl = require("../controllers/movies")

//this matches the URL
router.get("/", moviesCtrl.index);

//get /movies/new movie
router.get("/add", moviesCtrl.new);

//movies/21332312(id = params)
router.get("/:id", moviesCtrl.show);

//this one post /recipes
router.post("/", moviesCtrl.create);

module.exports = router;
