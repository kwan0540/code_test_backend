const express = require("express");

class PeopleController {
  constructor(peopleService) {
    this.peopleService = peopleService;
  }

  async getPeople(req, res) {
    try {
      const name = req.query.name;
      const id = req.query.id;
      if (!name && !id) {
        throw new Error("Please input either id or name");
      }
      let people;
      if (name == "Grogu") {
        people = await this.peopleService.getAddionalCharacter();
      } else {
        people = await this.peopleService.getPeople(id, name);
      }
      res.send(people);
    } catch (error) {
      res.send(`error occur with ${error}`);
    }
  }
}

module.exports = {
  PeopleController,
};
