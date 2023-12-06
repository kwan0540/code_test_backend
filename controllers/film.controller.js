const express = require("express");

class FilmController {
  constructor(filmService) {
    this.filmService = filmService;
  }

  async getFilm(req, res) {
    try {
      const { id } = req.query;
      const film = await this.filmService.getFilm(id);
      res.send(film);
    } catch (error) {
      res.send(`error occur with ${error}`);
    }
  }
}

module.exports = {
  FilmController,
};
