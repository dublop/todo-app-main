import React from "react";
import {Header} from "../Header";
import {Input} from "../Input";
import {Todos} from "../Todos";
import {TodoItem} from "../TodoItem";
import { useTodos } from "./useTodos";

function App(props) {
  const {
    todos,
    todosTotal,
    todosLeft,
    onClear, 
    onDelete, 
    onComplete,
    showTodos,
    handleShowTodos,
    setShowTodos,
    addTodo,
  } = useTodos();

  let newTodos;
  newTodos = handleShowTodos(showTodos, newTodos);

  return (
    <React.Fragment>
    <Header />
    <Input addTodo={addTodo}/>

    <Todos setShowTodos={setShowTodos} todosTotal={todosTotal} todosLeft={todosLeft} onClear={()=> onClear()}>
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

export default App;
