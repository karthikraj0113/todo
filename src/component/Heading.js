import React from "react";

let Heading = (props) =>{

    return <h1>{props.Heading} {props.value ? `: ${props.value}`:null} </h1>
}

export default Heading