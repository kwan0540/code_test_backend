const express = require("express");
const redisClient = require("../redis");

class SpeciesService {
  constructor(client) {
    this.client = client;
  }

  getSpecie = async (id) => {
    try {
      const redisResult = await redisClient.get(`specie#${id}`);
      if (redisResult) {
        return JSON.parse(redisResult);
      }
      const species = await this.client.getSpecieById(id);
      await redisClient.set(`specie#${id}`, JSON.stringify(species));
      return species;
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = SpeciesService;
