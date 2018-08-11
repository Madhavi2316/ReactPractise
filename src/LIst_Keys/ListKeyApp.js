import React,{Component} from 'react';
import Users from './Users';
import UniqueId from 'react-html-id';
class ListKeyApp extends Component{
    constructor(){
        super();
        UniqueId.enableUniqueIds(this);
        this.state={
            Users:[
                {id:this.nextUniqueId(),name:'Madhavi', age:25},
                {id:this.nextUniqueId(),name:'Mad', age:15},
                {id:this.nextUniqueId(),name:'Madhu', age:95},
                {id:this.nextUniqueId(),name:'Madvi', age:29},
                {id:this.nextUniqueId(),name:'Mavi', age:35},
                    ]
        }
        console.log(this.state.Users);
    }
   
    deleteEventHander=(index, e)=>{
        //copying Users json to User so we can modify and update the original json
        const Users=Object.assign([], this.state.Users);
        Users.splice(index,1);
        this.setState({Users:Users})
    }
    inputNameChangeHander=(id, e)=>{
        //index of element changed
        const index=this.state.Users.findIndex((user)=>{
           return user.id==id })
        //copying user state of index
        const user=Object.assign([],this.state.Users[index]);
        //cahnge name value by name given in input field 
        user.name=e.target.value;
        //copying complete users JSON into Users
        const Users=Object.assign([], this.state.Users);
        //Changed user to update in Users
        Users[index]=user;
        //Setting state
        this.setState({Users:Users})
        }
         ageChangeHandeler=(id,e)=>{
       //index of element changed
       const index=this.state.Users.findIndex((user)=>{
        return user.id==id })
        //copying user state of index
        const user=Object.assign([],this.state.Users[index]);
        //cahnge name value by name given in input field 
        user.age=e.target.value;
        //copying complete users JSON into Users
        const Users=Object.assign([], this.state.Users);
        //Changed user to update in Users
        Users[index]=user;
        //Setting state
     this.setState({Users:Users})

       }
    render(){
        return(<div>
            <h3>List-Key</h3>
            
            <ul>
           { this.state.Users.map((user, index)=>{
              return (
                <Users name={user.name}
                 key={user.id}
                 delEvent={this.deleteEventHander.bind(this,index)}
                 inputChange={this.inputNameChangeHander.bind(this,user.id)}
                 agechanged={this.ageChangeHandeler.bind(this,user.id)}
                 >
                 {user.age}</Users>
                 )

           })}
           </ul>
        </div>)
    }
}
export default ListKeyApp;
//The above program is written to show the JSon object and to update the name value when user inputs a new name, and to delete Json particular object when clicked delete button
//Here in this program we used a library called """react-html-id""" which will generate auto unique id's