const axios = require ('axios');

const getAllTypes = async () => {
   const typesApi = (await axios.get(`https://pokeapi.co/api/v2/type`)).data;
   const types = typesApi.results;
   return types;
};

module.exports = { getAllTypes }
