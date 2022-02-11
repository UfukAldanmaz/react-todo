function Footer({ todos, currentFilter, setCurrentFilter, clearCompleted, isVisible }) {
    function handleChangeFilter(filter) {
        setCurrentFilter(filter);
    }



    return (
        isVisible &&
        <footer className="footer">


            <span className="todo-count">
                <strong>{todos.filter(todo => !todo.completed).length} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a className={currentFilter === "all" ? "selected" : ""} onClick={() => handleChangeFilter("all")}>
                        All
                    </a>
                </li>
                <li>
                    <a className={currentFilter === "active" ? "selected" : ""} onClick={() => handleChangeFilter("active")}>
                        Active
                    </a>
                </li>
                <li>
                    <a className={currentFilter === "completed" ? "selected" : ""} onClick={() => handleChangeFilter("completed")}>
                        Completed
                    </a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => clearCompleted()}>
                Clear completed
            </button>
        </footer >);
}

export default Footer;