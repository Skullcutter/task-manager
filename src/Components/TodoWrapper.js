import React, { useEffect, useState } from 'react';
import TodoForm from "./TodoForm";
import Todo from './Todo';

function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);


        return () => {
            localStorage.removeItem("todos");
        };
    }, [])



    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])




    function addTodo(todo, i) {
        setTodos([...todos,
        {
            id: i,
            task: todo,
            complete: false
        }])
    }

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, i) => (
                <Todo
                    task={todo}
                    key={i}
                />
            ))}
        </div>
    )
}

export default TodoWrapper
