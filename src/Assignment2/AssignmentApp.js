import React, { Component }  from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
class AssignmentApp extends Component {
    state={
        textInput: ''
    }
    textCountHander=(event)=>{
        this.setState({textInput:event.target.Value})
        console.log(this.state.textInput)
    }
    deleteCharHandler=(index)=>{
        const text=this.state.textInput.split('');
        text.splice(index,1);
    }
    render(){
        const charList=this.state.textInput.split('').map((ch,index)=>{return this.deleteCharHandler(index)})
        return(
            <div>
                <h2>Assignment-2</h2>
                Texts:{this.state.textInput}
                {charList}
            </div>
        )
    }
}
export default AssignmentApp;