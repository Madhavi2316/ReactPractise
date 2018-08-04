import React from 'react';
const UserInput=(props)=>{
    return(
        <div>
            <input type="text" onChange={props.chang}value={props.currentName}/>
        </div>
    );

}
export default UserInput;