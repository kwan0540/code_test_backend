require("dotenv").config();
const axios = require("axios");

class Client {
  async getPeopleById(id) {
    try {
      const response = await axios.get(`${process.env.ENDPOINT}people/${id}/`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getFilmById(id) {
    try {
      const response = await axios.get(`${process.env.ENDPOINT}films/${id}/`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getVehicleById(id) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}vehicles/${id}/`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getStarshipById(id) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}starships/${id}/`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPlanetById(id) {
    try {
      const response = await axios.get(`${process.env.ENDPOINT}planets/${id}/`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSpecieById(id) {
    try {
      const response = await axios.get(`${process.env.ENDPOINT}species/${id}/`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPeoples(page) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}people/?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getFilms(page) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}films/?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getVehicles(page) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}starships/?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getStarships(page) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}starships/?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPlanets(page) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}planets/?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSpecies(page) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}soecues/?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  getPeopleByName = async (name) => {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}people/?search=${name}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  };

  async getFilmByTitle(title) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}films/?search=${title}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getVehicleByName(name) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}vehicles/?search=${name}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getStarshipByName(name) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}starships/?search=${name}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPlanetByName(name) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}planets/?search=${name}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSpecieByName(name) {
    try {
      const response = await axios.get(
        `${process.env.ENDPOINT}soecues/?search=${name}`
      );
      return response.data.results;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Client;
