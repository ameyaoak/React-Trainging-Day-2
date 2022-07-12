import React, { Component } from 'react';

class Ninjas2 extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjasList = ninjas.map(ninja => {
      return (
        <div className='Ninjas2' key={ninja.id}>
          <div>Name: {ninja.name}, Age: {ninja.age}, {ninja.belt}</div>
        </div>
      )
    });
    return (
      <div className='ninjasList'>{ninjasList}</div>
    )

  }
}

export default Ninjas2;