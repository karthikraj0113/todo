import React from "react";

let Button = (props) =>{

    return <button onClick={props.onClick}>{props.text} </button>
}

export default Button