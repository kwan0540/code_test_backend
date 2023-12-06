const express = require("express");
const redisClient = require("../redis");

class VehiclesService {
  constructor(client) {
    this.client = client;
  }

  getVehicle = async (id) => {
    try {
      const redisResult = await redisClient.get(`vehicle#${id}`);
      if (redisResult) {
        return JSON.parse(redisResult);
      }
      const vehicle = await this.client.getVehicleById(id);
      await redisClient.set(`vehicle#${id}`, JSON.stringify(vehicle));
      return vehicle;
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = VehiclesService;
