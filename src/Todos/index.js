import React from "react";
import './Todos.css';

function Todos({
    children,
    setShowTodos,
    todosTotal,
    todosLeft,
    onClear,
}) {

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
                        <a className="All ClearComplete" onClick={() => setShowTodos('All')}>All</a>
                        <a className="ClearComplete" onClick={() => setShowTodos('Active')}>Active</a>
                        <a className="ClearComplete" onClick={() => setShowTodos('Completed')}>Completed</a>
                    </p>

                </li>
            </ul>
        </section>
    );
}

export { Todos };