import React from 'react';
import './Anser.css'
const Anser = () => {
    return (
        <div>
            <h1>Qus : How React works</h1>
            <p>Anser : React is a very popular JavaScript library. React is a JavaScript library (not a framework). React works declaratively. The declarative code is a navbar, a header, a filter, and a list.
                <br />
                We create components to show it in the Ul. Components use it over and over again in the UI. Creates React virtual dom and changes what changes in the code . React uses props to pass data from the parent to the child components.
            </p>
            <h1>Qus : props <span>vs</span>  State</h1>
            <p>
                Anser: Props are arguments passed into React components. It pass by HTML attributes.Props are also pass data from one component to another, as parameters. Props are read-only. The data of props flow in one way binding.
                <br />
                React components has a built-in state object.State is a situation of a web site that could be changed by the interruption of a user. By button click state could be changed. Or by something else. state a built-in state object in react.
            </p>
        </div>
    );
};

export default Anser;