import React from 'react';
const Child=(props)=>{
    return(
        <div>
            <button onClick={props.click}>{props.title}{props.nem}</button>
        </div>
    )
}
export default Child;