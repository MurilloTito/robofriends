import React from "react";

const Scroll = (props) => {
    // o atributo style recebe uma expressao do jsx que eh um objeto com
    // elementos css
    console.log(props.children);
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

//o props.children eh o componente filho do componente que esta wrappando ele

export default Scroll;