import React,{Component} from 'react';

class MathOperationApp extends Component{
    state={
        first:0,
        second:0,
        Result:0
    }
    //to accept user input one and to set the same for state
    valueFirstChange=(event)=>{
        const first=event.target.value;
        this.setState({first:first})
    }
    //to accept user second input and to set state
    valueSecondChange=(event)=>{
        const second=event.target.value;
        this.setState({second:second})
    }
    //Addition Code
    add=(e)=>{
        let one=Number(this.state.first);
        let two=Number(this.state.second);
        let result=one+two
        this.setState({Result:result});  
        console.log(this.state.Result);
    }
    dec=(e)=>{
        let one=Number(this.state.first);
        let two=Number(this.state.second);
        let result=one-two
        this.setState({Result:result});  
        console.log(this.state.Result);
    }
    mul=(e)=>{
        let one=Number(this.state.first);
        let two=Number(this.state.second);
        let result=one*two
        this.setState({Result:result});  
        console.log(this.state.Result);
    }
    div=(e)=>{
        let one=Number(this.state.first);
        let two=Number(this.state.second);
        let result=one/two
        this.setState({Result:result});  
        console.log(this.state.Result);
    }
    set=(e)=>{
        this.setState({first:'value 1', second:'Value 2', Result:0
        })
    }
    render(){
        return(
            <div>
              <label>Value 1:</label>
              <input onChange={this.valueFirstChange} type="text" value={this.state.first}/>
              <label>Value 2:</label>
              <input onChange={this.valueSecondChange} type="text" value={this.state.second}/> 
              <label>Result:{this.state.Result} </label>
              <br/>
              <button onClick={this.add}>ADD</button><br/>
              <button onClick={this.dec}>Dec</button><br/>
              <button onClick={this.mul}>Mul</button><br/>
              <button onClick={this.div}>DIV</button><br/>
              <button onClick={this.set}>Reset</button>
            </div>
        );
    }
}
export default MathOperationApp;