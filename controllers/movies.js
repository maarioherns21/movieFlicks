const Movie = require("../models/movie");

module.exports = {
  new: newMovie,
  index,
  show,
  create,
};

function show(req, res) {
  Movie.findById(req.params.id, function (err, moviedb) {
    res.render("movies/details", { title: "Movie Details", movie: moviedb });
  });
}

function newMovie(req, res) {
  res.render("movies/add", { title: "Add Movie" });
}

function index(req, res) {
  Movie.find({}, function (err, movies) {
    res.render("movies/index", {
      movies,
      title: "All Movies",
    });
  });
}
//this creates and redirects to the new movie
function create(req, res) {
  const movie = new Movie(req.body);
  movie.save(function (err) {
    if (err) return res.redirect("/movies/add");
    res.redirect(`/movies/${movie._id}`);
  });
}
