const React = require("react")


class Index extends React.Component {
  render() {
    const { pokemons } = this.props
    return(
      <div>
        <h1> pokemon  Page! </h1>
        <nav>
          <a href="/pokemons/new">Create a New pokemon</a>
        </nav>
        <ul>
          {
            pokemons.map((pokemon, i) => {
              return (
                <li key={i}>
                  The{' '}
                    <a href={`/pokemons/${i}`}>
                      {pokemon.name}
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