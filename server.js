
// // Importing required modules
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const pokemons = require('./models/pokemons');



// const jsxViewEngine = require('jsx-view-engine');//



// // Setting up view engine and views directory
// app.set('view engine', 'jsx');
// app.set('views', './views');
// app.engine('jsx', jsxViewEngine());

// // Parsing request body
// app.use(express.urlencoded({ extended: false }));

// // Index route
// app.get('/pokemons', (req, res) => {
//   console.log('Index controller');
//   res.render('pokemons/Index', { pokemons });
// });



// // New route
// app.get('/pokemons/new', (req, res) => {
//   console.log('New controller');
//   res.render('pokemons/New');
// });

// // create route
// app.post('/pokemons', (req, res) => {
//   // Adding new pokemon to the pokemons array
//   pokemons.push(req.body);
//   console.log(pokemons);
//   res.send('data received');
// });


// // show route
// app.get('/pokemons/:id', (req, res) => {
//   res.render('pokemons/Show', {
//     // rendering the Show view with the pokemon data based on the provided id
//     pokemon: pokemons[req.params.id],
//   });
// });



// // starting the server
// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });




// Part 2 with Pokedex
// Add Model for pokemon
// Rewrite Index Route to use Mongodb
// Rewrite Index View to work with Index Route
// Rewrite Show Route to MongoDB
// Rewrite Create Route to work with MongoDB
// Use New Page to create all the pokemon that were in the original array at minimum


require("dotenv").config()//needs to be there to work
const express = require('express');	// Import the express library
const app = express();	// Create an instance of the express application
const PORT = process.env.PORT || 3000;	// Set the port number
const Pokemon = require('./models/pokemon');	// Import the pokemon module

const mongoose = require("mongoose");

//database conection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});
mongoose.connection.once("open", () => {
console.log("connected to mongo");
})
// Setting up view engine and views directory
const jsxViewEngine = require('jsx-view-engine');	// Import the jsx-view-engine library

app.set('view engine', 'jsx');// Set the view engine to use JSX
app.set('views', './views');	// Set the views directory
app.engine('jsx', jsxViewEngine());// Set the engine to use jsxViewEngine
// Parsing request body
app.use(express.urlencoded({ extended: false }));


// Index route
app.get('/pokemons', async (req, res) => {
 try{
const foundPokemons = await Pokemon.find({})
console.log(foundPokemons)
res.status(200).render('pokemons/Index',{
  pokemons: foundPokemons,
})
 } catch (err){

 }
 
});

// New route
app.get('/pokemons/new', (req, res) => {
  console.log('New controller');
  res.render('pokemons/New');
});


// Create
app.post('/pokemons', async (req, res) => {
  try{
  const createdPokemon = await Pokemon.create(req.body)
  res.status(201).redirect('/pokemons');
  }catch (error){
  res.status(400).send(err)
  }
 });

// Show route
  app.get('/pokemons/:id', async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);

    //second param of the render method must be an object
    res.render('pokemons/Show',{
      //there will be a variable available inside the jsx file called pokemon=foundPokemon
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});




//app is listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});





