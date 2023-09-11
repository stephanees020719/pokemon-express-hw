
// const pokemons = [
//   {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.png"},
//   {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.png"},
//   {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.png"},
//   {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander.png"},
//   {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.png"},
//   {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//   {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle.png"}
//  ];
// module.exports = pokemons


//part 2 mongoose 
const mongoose = require("mongoose");


const pokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
     img: String,

},{
  timestamps: true,
});

//module need to be capitalized module - name of the Schema
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;