import React from "react";

interface ButtonProps{
    clicks: number; 
}

export default function MyButton(props: ButtonProps) {
    const handleClick = () => {
        alert('Hello World!');
    };

    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert('Clicked: ' + {props.clicks} );
    };

    return (
        <button onClick={handleClick2} name="hello">
            Click Me
        </button>
    );
}