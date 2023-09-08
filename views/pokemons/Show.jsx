const React = require('react');
const myStyle = {
  color: 'yellow',
  backgroundColor: 'red',
  };

class Show extends React.Component {
   // render the component
  render () {
    // destructuring the name and img properties from the pokemon object passed as props
    const { name, img} = this.props.pokemon

    return (
      <div style={myStyle} >
        <h1>  </h1>
        <div>
        This pokemon is {name} .
       
        </div>
       
        <img src={img} alt="" />
      </div>
    );
  }
}


module.exports = Show;