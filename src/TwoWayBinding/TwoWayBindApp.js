import React,{Component} from 'react';
class TwoWayBindApp extends Component{
    state={
        name: 'Intial'
    }
    //on button click state name value will be changed
    clciked=()=>{
        this.setState({name:"I am clicked"})
    }
    inputHandler=(event)=>{
        this.setState({name:event.target.value})
    }
    
    render(){
        return(
            <div>
                <button onClick={this.clciked}>Click Me TO change The Text</button>
                <br/>               <br/>
                {/*Two Make it two way binding add value property*/}
                <input onChange={this.inputHandler} value={this.state.name} name="Ename" type="text"/><br/><br/>
                {/*To display state current value*/}
                <div>{this.state.name}</div>
            </div>
            )
            }
        }
export default TwoWayBindApp;