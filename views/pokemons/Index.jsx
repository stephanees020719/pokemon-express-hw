//import React library

const React = require('react');
//add inline style
const myStyle = {
  color: 'yellow',
  backgroundColor: 'red',
  };

// create a class component called Index that extends React.Component
  class Index extends React.Component {
    // render method to render the component
    render() {
      // destructure the pokemons prop from this.props
      const { pokemons } = this.props
      return(
        <div style={myStyle}>
          <h1> 'See All The Pokemon!' </h1>
          <nav>
            <a href="/pokemons/new">Create a New Pokemon</a>
          </nav>
          <ul>
            {
              // map over the pokemons array and render a list item for each pokemon
              pokemons.map((pokemon, i) => {
                // capitalize the first letter of the pokemon name
                const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                return (
                  <li key={i}>
                    This is {' '}
                      <a href={`/pokemons/${i}`}>
                        {capitalizedPokemonName}
                      </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    }
  }
 module.exports = Index