import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';



//Read User entered username in URL and Print ON Screen
const User=(params)=>{
    return(
        <h3>Hello User {params.uname}</h3>
    )
}
class RoutApp extends Component{
    state={
        loggedIn: false
    }
    clickHandler=(e)=>{
        console.log("Clicked");
        this.setState(prevState=>({loggedIn: !prevState.loggedIn}))
        }
    
    render(){
        return(
            //Router Initialization
            <Router>
                {/* /Wrapping Routes in div so we ca use n number of routes*/}
            <div>
                    <h3>Routing Excersice</h3>
                    <input type="button" value={this.state.loggedIn ? "Logout":"Logged In"} onClick={this.clickHandler.bind(this)}/>
                    <Route path="/" exact render={()=>{return (<h2>Home</h2>)}} />
                    <Route path="/about" exact strict render={()=>{return(<h2>About</h2>)}} />
                    <Route path="/user/:uname" exact render={(match)=>(
                        this.state.loggedIn ? (<User uname={match.params.uname}/>) : (<Redirect to="/"/>)
                    )}/>
                <ul>
                    <li> 
                    <NavLink to="/" exact activeStyle={
                        {color:'green'}
                        }>HOME</NavLink></li>
                    <li>
                    <NavLink to="/about" exact activeStyle={
                        {color:'green'}
                        }>ABOUT</NavLink></li>
                    <li>
                    <NavLink to="/user/Mad" exact activeStyle={
                        {color:'green'}
                        }>USER 1</NavLink ></li>
                    <li>
                        <NavLink to="/user/Sai" exacts activeStyle={
                        {color:'green'}
                        }> USER 2</NavLink></li>
                </ul>
                {/*Prompt to give alert to user when accessed user page with out og in*/}
                <Prompt
                  when={!this.state.loggedIn}
                  message={(location)=>{
                      return location.pathname.startsWith('/user')? "Are You Sure" : true
                  }}
                />
             </div>
            </Router>
        )
    }
}
export default RoutApp;