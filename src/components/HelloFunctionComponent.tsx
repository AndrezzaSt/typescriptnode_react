import React from "react";

//tipando a entrada de uma função
interface HelloProps{
    name: string;
    age?:number;
}

function HelloFunctionComponent (props: HelloProps){
    //const
    return (
        <div>
            Hello {props.name}
            {props.age}
        </div>
    );
}

export default HelloFunctionComponent;
