const express = require("express");
const redisClient = require("../redis");

class StarshipsService {
  constructor(client) {
    this.client = client;
  }

  getStarship = async (id) => {
    try {
      const redisResult = await redisClient.get(`starship#${id}`);
      if (redisResult) {
        return JSON.parse(redisResult);
      }
      const starships = await this.client.getStarshipById(id);
      await redisClient.set(`starship#${id}`, JSON.stringify(starships));
      return starships;
    } catch (error) {
      throw new Error(`Error with ${error}`);
    }
  };
}

module.exports = StarshipsService;
