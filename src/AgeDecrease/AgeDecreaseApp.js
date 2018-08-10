import React,{Component} from 'react';
import AgeDecFunction from './AgeDecFuntion';
class AgeDecreaseApp extends Component{
    state={
        users:[{
                name:'Madhavi',age:25

                },
                {
                name:'Madhu',age:30
    
                },
               {
                 name:'Priya',age:40
        
                }
                ]
    };
    decMyAge=(e)=>{
        //Accessing user object and decreaing the age 
        const newState=this.state.users.map((user)=>{
            const tempUser=user;
            tempUser.age -= 10;
            return tempUser;
        });
        this.setState({newState});
    
    }
    render(){
        return(
            <div>
                <h3>Click to Decrease Your Age</h3>
                <button onClick={this.decMyAge}>Click Me</button>
                {
                    this.state.users.map((user)=>{
                        return <AgeDecFunction name={user.name} age={user.age}></AgeDecFunction>
                    })
                }
            </div>
        );
    }
}
export default AgeDecreaseApp;
