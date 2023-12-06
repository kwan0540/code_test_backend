const Client = require("../client");
const { FilmsService } = require("./film.service");
const { PeopleService } = require("./people.service");
const PlanetService = require("./planet.service");
const SpeciesService = require("./species.service");
const StarshipsService = require("./starships.service");
const VehiclesService = require("./vehicles.service");

const client = new Client();
const planetService = new PlanetService(client);
const speciesService = new SpeciesService(client);
const starshipsService = new StarshipsService(client);
const vehiclesService = new VehiclesService(client);
const filmsService = new FilmsService(client);
const peopleService = new PeopleService(client);

module.exports = {
  planetService,
  speciesService,
  starshipsService,
  vehiclesService,
  filmsService,
  peopleService,
};
