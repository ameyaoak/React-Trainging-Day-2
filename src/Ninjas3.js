import React from 'react';

const Ninjas3 = ({ninjas,deleteNinja}) => {

  const ageGreaterThan1 = (ninja) => {
    return ninja.age>1;
  }
  //render() {
    //const { ninjas } = this.props;
    const ninjasList = ninjas.filter(ageGreaterThan1).map(ninja => { 
      return (
        <div className='Ninjas3' key={ninja.id}>
          <div>Name: {ninja.name}, Age: {ninja.age}, Belt: {ninja.belt}</div>
          <button onClick = {()=>{deleteNinja(ninja.id)}}>-</button>
        </div>
      )  
    });

    return (
      <div className='ninjasList'>{ninjasList}</div>
    )

  //}
}

export default Ninjas3;