import './TodoItem.css';
import { ReactComponent as  CheckIcon } from  "../assets/icon-check.svg";
import { ReactComponent as DeleteIcon } from  "../assets/icon-cross.svg";

function TodoItem(props) {;
    return (
        <li className="TodoItem">
            <span className={`Icon ${props.completed ? 'Active' : ""}`}
            onClick={props.onComplete}>
                {props.completed === true ? <CheckIcon className={"Check"} />: ""}
            </span>

            <p className={props.completed === true ? 'Completed' : ""}>{props.text}</p>
            
            {/*<img src={DeleteIcon} className='Delete' alt='Todo' onClick={props.onDelete} />*/}
            <DeleteIcon className='Delete' alt='Todo' onClick={props.onDelete} />
        </li>
    );
}

export { TodoItem };