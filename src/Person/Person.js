import React from 'react';
import './Person.css';

const Person=(props)=>{
    return(
        <div className="Person">
        <h2 onClick={props.click}>I'm {props.name} and I am {Math.floor(Math.random()* props.age)} Years Old !!</h2>
        <input type="text" onChange={props.changed} value={props.name}/>
        <p>{props.children}</p>
        </div>
    );
}
export default Person;