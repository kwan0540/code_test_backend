const express = require("express");

class SpeciesController {
  constructor(speciesService) {
    this.speciesService = speciesService;
  }

  async getSpecie(req, res) {
    try {
      const id = req.query.id;
      const sepcie = await this.speciesService.getSpecie(id);
      res.send(sepcie);
    } catch (error) {
      res.send(`error occur with ${error}`);
    }
  }
}

module.exports = {
  SpeciesController,
};
