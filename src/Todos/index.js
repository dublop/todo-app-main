import React from "react";
import { TodoContext } from "../TodoContext";
import './Todos.css';

function Todos(props) {
    const {setShowTodos} = React.useContext(TodoContext);

    const handdleClick = (text) => {
        setShowTodos(text);
    };

    return (
        <section>
            <ul className="Todo">
                {props.children}

                <li className="TodoCount">
                    <p className="TodoMargin">
                        {props.left} items left from {props.total}
                    </p>
                    <p className="TodoMargin ClearComplete" onClick={props.onClear}>
                        Clear completed
                    </p>
                </li>

                <li className="TodoCount TodoActions">
                    <p className="TodoP">
                        <a className="All ClearComplete" onClick={() => handdleClick('All')}>All</a>
                        <a className="ClearComplete" onClick={() => handdleClick('Active')}>Active</a>
                        <a className="ClearComplete" onClick={() => handdleClick('Completed')}>Completed</a>
                    </p>

                </li>
            </ul>
        </section>
    );
}

export { Todos };