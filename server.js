const express = require('express');	// Import the express library
const app = express();	// Create an instance of the express application
const PORT = process.env.PORT || 3000;	// Set the port number
const pokemons = require('./models/pokemons');	// Import the pokemons module


const jsxViewEngine = require('jsx-view-engine');	// Import the jsx-view-engine library

app.set('view engine', 'jsx');// Set the view engine to use JSX
app.set('views', './views');	// Set the views directory
app.engine('jsx', jsxViewEngine());// Set the engine to use jsxViewEngine


// Index
app.get('/pokemons', (req, res) => {
console.log('New controller');
res.render('pokemons/Index', { pokemons });
});

// New
app.get('/pokemons/new', (req, res) => {
  console.log('New controller');
  res.render('pokemons/New');
});

// Delete

// Update

// Create
app.post('/pokemons', (req, res) => {
 pokemons.push(req.body);
console.log(pokemons);

  res.send('Pokemon Created');
});

// Edit

// Show
app.get('/pokemons/:id', (req, res) => {
  //second param of the render method must be an object
  res.render('pokemons/Show', {
    //there will be a variable available inside the jsx file called pokemon, its value is pokemons
    pokemon: pokemons[req.params.id],
  });
});




//app is listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

