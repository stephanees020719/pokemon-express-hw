const React = require('react')

class Show extends React.Component {
  render () {
    const { name, img} = this.props.pokemon

    return (
      <div>
        <h1>  "Gotta Catch 'Em All"</h1>
        <div>
        This pokemon is {name} 
        
        </div>
       
        <img src={img} alt="" />
      </div>
    );
  }
}




module.exports = Show;