import React from 'react';
 const Users=(props)=>{
    return (
        <div>
            <li><span>Name:{props.name} | Age:{props.children}</span>
            <input type="text" value={props.name} onChange={props.inputChange}/>
            <button onClick={props.delEvent}>DeleteMe</button></li>
        </div>
    )
}
export default Users;