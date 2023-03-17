import { useRef } from 'react';
import './Input.css';

function Input({ addTodo }) {
    const inputRef = useRef(null);

    const searchInput = (e) => {
        if(e.key === 'Enter') {
            addTodo(inputRef.current.value);
            inputRef.current.value = null;
        }
    }

    return (
        <div className="InputDiv">
            <span className={"Icon"} />
            <input className="Input"
            ref={inputRef}
            placeholder="Add a new note..."
            onKeyDown={searchInput}
             />
        </div>
    );
}

export { Input };