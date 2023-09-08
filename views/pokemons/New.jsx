const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New pokemons Page</h1>
        

        <form action="/pokemons" method="POST">
          Name: <input type="text"  name="name" /> <br />
     
       
          Image URL: <input type="text" name="img" /><br />
          <input type="submit" value="Create pokemon" /><br />
        </form>
        <nav>
          <a href="/pokemons">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New

