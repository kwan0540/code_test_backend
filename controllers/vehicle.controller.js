const express = require("express");

class VehicleController {
  constructor(vehicleService) {
    this.vehicleService = vehicleService;
  }

  async getVehicle(req, res) {
    try {
      const id = req.query.id;
      const vehicle = await this.vehicleService.getVehicle(id);
      res.send(vehicle);
    } catch (error) {
      res.send(`error occur with ${error}`);
    }
  }
}

module.exports = {
  VehicleController,
};
