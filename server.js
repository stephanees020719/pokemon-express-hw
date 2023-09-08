// Importing required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pokemons = require('./models/pokemons');
const jsxViewEngine = require('jsx-view-engine');

// Setting up view engine and views directory
app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// Parsing request body
app.use(express.urlencoded({ extended: false }));

// Index route
app.get('/pokemons', (req, res) => {
  console.log('Index controller');
  res.render('pokemons/Index', { pokemons });
});

// New route
app.get('/pokemons/new', (req, res) => {
  console.log('New controller');
  res.render('pokemons/New');
});

// create route
app.post('/pokemons', (req, res) => {
  // Adding new pokemon to the pokemons array
  pokemons.push(req.body);
  console.log(pokemons);
  res.send('data received');
});

// show route
app.get('/pokemons/:id', (req, res) => {
  res.render('pokemons/Show', {
    // rendering the Show view with the pokemon data based on the provided id
    pokemon: pokemons[req.params.id],
  });
});

// starting the server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
