const express = require("express");
const redisClient = require("../redis");
const fsPormise = require("fs/promises");

class PeopleService {
  constructor(client) {
    this.client = client;
  }

  getPeople = async (id, name) => {
    try {
      let result;
      if (name != undefined) {
        const redisResult = await redisClient.get(`people#${name}`);
        if (redisResult) {
          return JSON.parse(redisResult);
        }
        result = await this.client.getPeopleByName(name);
        await redisClient.set(`people#${name}`, JSON.stringify(result));
      } else {
        const redisResult = await redisClient.get(`people#${id}`);
        if (redisResult) {
          return JSON.parse(redisResult);
        }
        result = await this.client.getPeopleById(id);
        await redisClient.set(`people#${id}`, JSON.stringify(result));
      }
      return result;
    } catch (error) {
      throw new Error(`Error with ${error}`);
    }
  };

  getAddionalCharacter = async () => {
    try {
      const data = await fsPormise.readFile(
        `${__dirname}/../extra_character_1.json`
      );
      return JSON.parse(data.toString());
    } catch (error) {
      throw new Error(`Error with ${error}`);
    }
  };
}

module.exports = {
  PeopleService,
};
