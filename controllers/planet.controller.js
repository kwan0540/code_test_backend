const express = require("express");

class PlanetController {
  constructor(planetService) {
    this.planetService = planetService;
  }

  async getPlanet(req, res) {
    try {
      const id = req.query.id;
      const planet = await this.planetService.getPlanet(id);
      res.send(planet);
    } catch (error) {
      res.send(`error occur with ${error}`);
    }
  }
}

module.exports = {
  PlanetController,
};
