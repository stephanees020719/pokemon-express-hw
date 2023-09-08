const React = require('react');
//add inline style 
const myStyle = {
  color: 'yellow',
  backgroundColor: 'red',
  };

class New extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1> "Gotta Catch 'Em All"</h1>
        

        <form action="/pokemons" method="POST">
          Name: <input type="text"  name="name" /> <br />
        Image URL: <input type="text" name="img" />
          <input type="submit" value="Create Pokemon" />
        </form>
        <nav>
          <a href="/pokemons">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New