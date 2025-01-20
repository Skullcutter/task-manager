import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    function handleClick(e) {
        e.preventDefault();
        if (!value) return ''
        else
            addTodo(value);
        setValue('');
    }
    return (
        <form className="TodoForm"
        >

            <input
                className="todo-input"
                type="text"
                placeholder="Add a new task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />


            <button
                className="todo-btn"
                type="submit"
                onClick={handleClick}
            >Add Task</button>
        </form>
    )
}

export default TodoForm;
