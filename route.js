const express = require("express");
const { PeopleController } = require("./controllers/people.controller");
const {
  peopleService,
  filmsService,
  planetService,
  speciesService,
  starshipsService,
  vehiclesService,
} = require("./services/service.factory");
const { FilmController } = require("./controllers/film.controller");
const { PlanetController } = require("./controllers/planet.controller");
const { SpeciesController } = require("./controllers/species.controller");
const { StarshipController } = require("./controllers/starship.controller");
const { VehicleController } = require("./controllers/vehicle.controller");
const router = express.Router();

const peopleController = new PeopleController(peopleService);
const filmController = new FilmController(filmsService);
const planetController = new PlanetController(planetService);
const speciesController = new SpeciesController(speciesService);
const starshipController = new StarshipController(starshipsService);
const vehicleController = new VehicleController(vehiclesService);

router.get("/people", peopleController.getPeople.bind(peopleController));
router.get("/film", filmController.getFilm.bind(filmController));
router.get("/planet", planetController.getPlanet.bind(planetController));
router.get("/specie", speciesController.getSpecie.bind(speciesController));
router.get(
  "/starship",
  starshipController.getStarship.bind(starshipController)
);
router.get("/vehicle", vehicleController.getVehicle.bind(vehicleController));

module.exports = router;
