import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './Assignment1/UserOutput';
import UserInput from './Assignment1/UserInput';
import AssignmentApp from './Assignment2/AssignmentApp';
import RoutApp from './Routing/RoutApp';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  state={
    persons:[
      {id:'ahskjdhka', name:'MAX',age:25},
      {id:'akdksk', name:'MAD',age:20},
      {id:'dhfkhsdk', name:'SAI',age:25}
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
 /******************************/
 //
 /******************************/
  nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person={...this.state.persons[personIndex]};
    person.name= event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons});
  }
/******************************/
 //
 /******************************/

  deletePersonHandler=(personIndex)=>{
    const persons=this.state.persons.slice();
    //const persons=[...persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  /******************************/
 //Toggle handler code
 /******************************/
  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons: !doesShow})
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
        {this.state.persons.map((person, index)=>{
          return <Person  
           click={()=>this.deletePersonHandler(index)}
           name={person.name} 
           age={person.age}
           key={person.id}
           changed={(event)=>this.nameChangedHandler(event, person.id)}
           />
        
        })}
     </div> )
    }
    return(<div className='App'><h1>React - App</h1>
      <p>Let's Learn Coding With MAX</p>
      <RoutApp />

  <br/>
     { /*inline button styling*/}
      <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
  {persons }
    
    </div>);
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'HI, I\'m react app'));
  }
}

export default App;
