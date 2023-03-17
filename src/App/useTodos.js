import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {item: todos, saveItem: setTodos} = useLocalStorage('TODO_APP_MAIN_V1', []);
    const todosTotal = todos.length;
    const todosLeft = todos.filter(todo => todo.completed === false).length;
    const [showTodos, setShowTodos] = useState('All');

    const handleShowTodos = () => {
        const todosToReturn = {
            All: todos,
            Active: todos.filter(todo => !todo.completed),
            Completed: todos.filter(todo => todo.completed),
        };
        return todosToReturn[showTodos];
    }
    
    const onClear = () => {
        const newTodos = todos.filter(todo => 
        todo.completed === false
        );

        setTodos(newTodos);
    };
    
    const onComplete = (text) => {
        const index = todos.findIndex(todo => (todo.text === text));
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const onDelete = (text) => {
        const index = todos.findIndex(todo => (todo.text === text));
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        console.log(todos[index].text);
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push(
            {
                text: text,
                completed: false,
            }
        )
        setTodos(newTodos);
    };

    return (
        {
        todos,
        setTodos,
        todosTotal,
        todosLeft,
        onClear,
        onComplete,
        onDelete,
        addTodo,
        showTodos,
        setShowTodos,
        handleShowTodos,
        }
    );
}

export { useTodos };