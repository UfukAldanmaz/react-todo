import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({ id: "", task: "", completed: false })

    function handleChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="new-todo" name="task" type="text" value={todo.task} onChange={handleChange} placeholder="What needs to be done?" autofocus autoComplete="off" />
        </form>
    )
}
export default TodoForm;