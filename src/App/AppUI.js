import React from "react";
import {Header} from "../Header";
import {Input} from "../Input";
//import {Actions} from "./Actions";
import {Todos} from "../Todos";
import {TodoItem} from "../TodoItem";
import { TodoContext } from "../TodoContext";

function AppUI() {
    const {
        todos,
        todosTotal,
        todosLeft,
        onClear, 
        onDelete, 
        onComplete,
        showTodos,
        handleShowTodos,
    } = React.useContext(TodoContext);
   
    let newTodos;
    newTodos = handleShowTodos(showTodos, newTodos);

    return (
        <React.Fragment>
          <Header />
          <Input />
    
          <Todos total={todosTotal} left={todosLeft} onClear={()=> onClear()}>
            {
              newTodos.map(todo => (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onDelete={() =>{onDelete(todo.text)}}
                onComplete={() => {onComplete(todo.text)}}
                />
              ))
            }
          </Todos>
    
    
        </React.Fragment>
      );
}

export { AppUI };