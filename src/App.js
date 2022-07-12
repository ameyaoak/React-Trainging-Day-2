import React, { Component } from 'react';
import Ninjas from './Ninjas';
import Ninjas1 from './Ninjas1';
import Ninjas2 from './Ninjas2';
import Ninjas3 from './Ninjas3';
import AddNinjas from './AddNinjas';

class App extends Component {

  state = {
    ninjas: [
      { name: "Om", age: "10", belt: "grey", id: 1 },
      { name: "Zom", age: "10", belt: "grey", id: 2 },
      { name: "Dhom", age: "10", belt: "grey", id: 3 }
    ]
  }

  addNinja = (ninj) => {
    ninj.id = Math.random() * 10;
    console.log("added ninja"+ninj);
    let ninja = [...this.state.ninjas, ninj];
    this.setState({
      ninjas: ninja
    })
  }

  deleteNinja = (id) => {
    let ninjasListNew = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });

    this.setState({
      ninjas:ninjasListNew
    })
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("componentDidUpdate");
    console.log(prevProps,prevState); 
  }

  render() {

    return (
      <div className='App'>
        <b>Pass nothing</b>
        <Ninjas />
        <hr />
        <b>Pass attributes to other class/component</b>
        <Ninjas1 name="Ram" age="30" belt="black" />
        <Ninjas1 name="Sham" age="20" belt="yellow" />
        <hr />
        <b>Pass state to other class/component</b>
        <Ninjas2 ninjas={this.state.ninjas} />
        <hr />
        <b>Pass state to other class/component no class/no render method</b>
        <Ninjas3 ninjas={this.state.ninjas} deleteNinja = {this.deleteNinja}/>
        
        <b>Pass data from child to parent using callback function</b>
        <AddNinjas addNinja={this.addNinja} /> 
      </div>
    )
  }
}

export default App;