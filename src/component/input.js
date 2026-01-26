import React from "react";

let Input = (props) =>{

    return <input placeholder={props.placeholder} value={props.value} onChange={props.onChange}> </input>
}

export default Input