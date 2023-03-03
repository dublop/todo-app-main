import React from "react";
import './Todos.css';

function Todos({
    children,
    setShowTodos,
    todosTotal,
    todosLeft,
    onClear,
}) {
    const handdleClick = (text) => {
        setShowTodos(text);
    };

    return (
        <section>
            <ul className="Todo">
                {children}

                <li className="TodoCount">
                    <p className="TodoMargin">
                        {todosLeft} items left from {todosTotal}
                    </p>
                    <p className="TodoMargin ClearComplete" onClick={onClear}>
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