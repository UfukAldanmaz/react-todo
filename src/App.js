
import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [isToggleAll, setIsToggleAll] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])


  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
      setFilteredTodos(storageTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
    setFilteredTodos([todo, ...todos]);
  }
  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    );

    setFilteredTodos(
      filteredTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
    setFilteredTodos(filteredTodos.filter(todo => todo.id !== id));
  }

  function handleToggleAll() {

    setIsToggleAll(!isToggleAll)
    setTodos(
      todos.map(todo => {

        return {
          ...todo,
          completed: isToggleAll
        }

      })
    );
    setFilteredTodos(
      filteredTodos.map(todo => {

        return {
          ...todo,
          completed: isToggleAll
        }

      })
    );
  }

  function changeCurrentFilter(filter) {
    setCurrentFilter(filter);
    if (filter === "all") {
      setFilteredTodos([...todos])
    }
    else if (filter === "active") {
      setFilteredTodos(todos.filter(todo => !todo.completed))
    }
    else {
      setFilteredTodos(todos.filter(todo => todo.completed))
    }
  }

  function handleClearCompleted() {
    setTodos(todos.filter(todo => !todo.completed));
    setFilteredTodos(filteredTodos.filter(todo => !todo.completed));
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <TodoForm addTodo={addTodo} />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={handleToggleAll} >
          Mark all as complete
        </label>
        <TodoList todos={filteredTodos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </section>
      <Footer
        todos={filteredTodos}
        setCurrentFilter={changeCurrentFilter}
        currentFilter={currentFilter}
        clearCompleted={handleClearCompleted} />
    </section>
  );
}

export default App;

