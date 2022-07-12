import React, { Component } from 'react';

class AddNinjas extends Component {
  state = {
    id:null,
    name: null,
    age: null, 
    belt: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    });
  }

  //e.prevent default avoids bubbling of events
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addNinja(this.state);//passing data to parent using callback
  }

  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          Name:<input type="text" id="name" onChange={this.handleChange}/>
          Age:<input type="text" id="age" onChange={this.handleChange}/>
          Belt:<input type="text" id="belt" onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default AddNinjas;