const { Router } = require('express');

// Importo todos los routers;
const pokemonRouter = require('./pokemonRouter');
const typeRouter = require('./typeRouter');

const router = Router();

// Configuro los routers
router.use('/pokemons', pokemonRouter);
router.use('/types', typeRouter);

module.exports = router;