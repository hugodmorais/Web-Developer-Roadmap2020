import React from 'react';
import './Hello.css';

class Hello extends React.Component {
  render() {
    return (
      <div className="tc">
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

export default Hello;