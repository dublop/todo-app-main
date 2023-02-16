import React from "react";
import './TodoItem.css';
import CheckIcon from  "../icons/icon-check.svg";
import DeleteIcon from  "../icons/icon-cross.svg";

function TodoItem(props) {;
    return (
        <li className="TodoItem">
            <span className={`Icon ${props.completed ? 'Active' : undefined}`}
            onClick={props.onComplete}>
                {props.completed === true ? <img src={CheckIcon} className={"Check"}/> : undefined}
            </span>

            <p className={props.completed === true ? 'Completed' : undefined}>{props.text}</p>
            
            <img src={DeleteIcon} className='Delete' alt='Todo' onClick={props.onDelete} />

        </li>
    );
}

export { TodoItem };