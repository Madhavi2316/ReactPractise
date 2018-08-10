import React from 'react';
import Child from './Child';
const Parent=(props)=>{
    return(
        <div>
            {/*To access all passed values from app file and the same will be passed to child file*/}
            <Child {...props} nem="Hello"/>
        </div>
    )
}
export default Parent;