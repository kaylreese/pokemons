const { Router } =  require('express');

const { 
    getPokemonById, 
    getAllPokemons,
    getPokemonsRelated
} = require('../controller/pokemonController.js');

const pokemonRouter = Router();

const getPokemonsHandler = async(req, res) => {
    const { attack } = req.query;

    console.log(attack);

    if(attack) {
        let result = await getPokemonsRelated(Number(attack));
        res.status(200).send(result);
    } else {
        const result = await getAllPokemons();
        res.status(200).send(result);
    }
}

const getPokemonHandler = async (req, res) => {
    const { id } = req.params;
    
    try {
        const pokemon = await getPokemonById(id);
        res.status(200).send(pokemon);
    } catch (error) {
        res.status(404).send(error.message);
    }
}


pokemonRouter.get('/', getPokemonsHandler);
pokemonRouter.get('/:id', getPokemonHandler);

module.exports = pokemonRouter;