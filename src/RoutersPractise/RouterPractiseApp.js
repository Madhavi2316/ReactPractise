import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const Error=()=>{
    return(<h3>404 EROR PAGE NOT FOUND</h3>)
}
class RuterPractiseApp extends Component{
    render(){
        return(
            <Router>
            <Switch>
                    <Route path="/" exact strict render={()=>{return(<h3>HOME</h3>)}}></Route>
                    <Route path="/aboutus" exact strict render={()=>{return(<h3>ABOUT US</h3>)}}/>
                    <Route component={Error}/>
            </Switch>
            </Router>
        )
    }
}
export default RuterPractiseApp;