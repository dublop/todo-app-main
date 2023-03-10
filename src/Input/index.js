import React from "react";
import { TodoContext } from "../App/useTodos";
import './Input.css';

function Input({ addTodo }) {
    const inputRef = React.useRef(null);

    const searchInput = (e) => {
        if(e.key === 'Enter') {
            addTodo(inputRef.current.value);
            inputRef.current.value = null;
        }
    }

    return (
        <div className="InputDiv">
            <span className={"Icon"}>
            </span>
            <input className="Input"
            ref={inputRef}
            placeholder="Add a new note..."
            onKeyDown={searchInput}
             />
        </div>
    );
}

export { Input };