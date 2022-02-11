function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);

    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <li className={todo.completed ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={handleCheckboxClick} checked={todo.completed} />
                <label>{todo.task}</label>
                <button className="destroy" onClick={handleRemoveClick}></button>
            </div> </li>
    );
}

export default Todo;