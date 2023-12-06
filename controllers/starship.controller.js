const express = require("express");

class StarshipController {
  constructor(starshipService) {
    this.starshipService = starshipService;
  }

  async getStarship(req, res) {
    try {
      const id = req.query.id;
      const starship = await this.starshipService.getStarship(id);
      res.send(starship);
    } catch (error) {
      res.send(`error occur with ${error}`);
    }
  }
}

module.exports = {
  StarshipController,
};
