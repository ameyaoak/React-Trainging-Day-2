import React, { Component } from 'react';

class Ninjas1 extends Component {
  render() {
    const { name, age, belt } = this.props
    return (
      <div className='Ninjas1'>
        <div>Name: {name}, Age: {age}, Belt: {belt}</div>
      </div>
    )
  }
}

export default Ninjas1;