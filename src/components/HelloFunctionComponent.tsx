import React from "react";

//tipando a entrada de uma função
interface HelloProps{
    name: string;
}

function HelloFunctionComponent (props: HelloProps){
    return (
        <div>
            Hello {props.name}
        </div>
    );
}

export default HelloFunctionComponent;
