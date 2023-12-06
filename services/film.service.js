const express = require("express");
const redisClient = require("../redis");

class FilmsService {
  constructor(client) {
    this.client = client;
  }

  getFilm = async (id) => {
    try {
      const redisResult = await redisClient.get(`film#${id}`);
      if (redisResult) {
        return JSON.parse(redisResult);
      }
      const films = await this.client.getFilmById(id);
      await redisClient.set(`film#${id}`, JSON.stringify(films));
      return films;
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = { FilmsService };
