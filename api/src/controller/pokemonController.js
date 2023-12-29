const axios = require ('axios');

const getAllPokemons = async () => {
    return await axios.get("https://pokeapi.co/api/v2/pokemon?limit=52&offset=0")
        .then((res) => {
            return Promise.all(
                res.data.results.map((pokemon) => {
                    return axios.get(pokemon.url).then((res, i) => {
                        return {
                            id: Number(res.data.id),
                            name: res.data.name,
                            hp: res.data.stats[0].base_stat,
                            attack: res.data.stats[1].base_stat,
                            defense: res.data.stats[2].base_stat,
                            speed: res.data.stats[4].base_stat,
                            height: res.data.height,
                            weight: res.data.weight,
                            image: res.data.sprites.other.dream_world.front_default,
                            types: res.data.types.map((type) => {
                                return { name: type.type.name };
                            })
                            // created: false,
                        };
                    });
                })
            );
        });
};

const getPokemonById = async (id) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)   // El Axios viene en data
        .then((res) => {
            return {
                id: Number(res.data.id),
                name: res.data.name,
                hp: res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                speed: res.data.stats[4].base_stat,
                height: res.data.height,
                weight: res.data.weight,
                image: res.data.sprites.other.dream_world.front_default,
                types: res.data.types.map((type) => {
                    return { name: type.type.name };
                })
            };
        });
};

const getPokemonsRelated = async (attack) => {
    const pokemons = await getPokemons();
    const filterApi = await pokemons.filter(pokemon => pokemon.attack === attack);

    return filterApi;
}

const getPokemons = async () => {
    return await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
        .then((res) => {
            return Promise.all(
                res.data.results.map((pokemon) => {
                    return axios.get(pokemon.url).then((res, i) => {
                        return {
                            id: Number(res.data.id),
                            name: res.data.name,
                            hp: res.data.stats[0].base_stat,
                            attack: res.data.stats[1].base_stat,
                            defense: res.data.stats[2].base_stat,
                            speed: res.data.stats[4].base_stat,
                            height: res.data.height,
                            weight: res.data.weight,
                            image: res.data.sprites.other.dream_world.front_default,
                            types: res.data.types.map((type) => {
                                return { name: type.type.name };
                            })
                            // created: false,
                        };
                    });
                })
            );
        });
};

module.exports = { getPokemonById, getAllPokemons, getPokemonsRelated }
