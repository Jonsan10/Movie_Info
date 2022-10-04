import React from 'react';
import { render } from 'react-dom';

const Random = (props) => {

}
 



class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.setState({ random: this.state.random + rand });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <div>The number is: {this.state.random}</div>
      </div>
    );
  }
}

render(<Button />, document.getElementById('container'));

export default Random;