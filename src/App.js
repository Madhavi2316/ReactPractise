import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './Assignment1/UserOutput';
import UserInput from './Assignment1/UserInput';

class App extends Component {
  state={
    persons:[
      {name:'MAX',age:25},
      {name:'MAD',age:20},
      {name:'SAI',age:25}
    ],
    userName:'Mady',
    showPersons: false

  }
  /******************************/
   //setState on button click
  /*****************************/
  UchangeonTypeHandler=(e)=>{
    this.setState({userName:e.target.value})
  }
  switchNameHandler=(named)=>{
    //alert("clicked");
    //this.state.persons[0].name="Maxiii";
    this.setState({persons:[
      {name:named,age:25},
      {name:'MAD',age:20},
      {name:'SAIKI',age:25}
    ]})
  }
  nameChangedHandler=(event)=>{
    this.setState({persons:[
      {name:'MaD',age:25},
      {name:event.target.value,age:20},
      {name:'SAIKI',age:29}
    ]})
    console.log("chnaged");
  }
  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
 
  render() {
    const style={
      backgroundColor:'wheat',
      font:'inherit',
      border:'1px solid red',
      cursor:'pointer'
    }
    let persons= null
    if(this.state.showPersons){
      persons=(
      <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Dancing</Person>
      <Person changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this,"Lol")} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div> )
    }
    return(<div className='App'><h1>React - App</h1>
      <p>Let's Learn Coding With MAX</p>

  <br/>
     { /*inline button styling*/}
      <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
  {persons }
    
    </div>);
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'HI, I\'m react app'));
  }
}

export default App;
