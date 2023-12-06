const express = require("express");
const redisClient = require("../redis");

class PlanetService {
  constructor(client) {
    this.client = client;
  }

  getPlanet = async (id) => {
    try {
      const redisResult = await redisClient.get(`planet#${id}`);
      if (redisResult) {
        return JSON.parse(redisResult);
      }
      const planet = await this.client.getPlanetById(id);
      await redisClient.set(`planet#${id}`, JSON.stringify(planet));
      return planet;
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = PlanetService;
