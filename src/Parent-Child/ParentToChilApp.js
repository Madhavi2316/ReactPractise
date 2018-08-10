import React,{Component} from 'react';
import Parent from './Parent';

class ParentToChilApp extends Component{
    state={
        title:" I am Title"
    }
    clicked=(e)=>{
        this.setState({title:e})
    }
    render(){
        return(
            <div>
                <h5>I am Patent To Child App File</h5> 
                <Parent click={this.clicked.bind(this,"hjgjhghjg")} title={this.state.title} />
            </div>
        );
    }
}
export default ParentToChilApp;