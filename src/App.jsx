import React, { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from './api';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'

const App = () => {
    const [todos, setTodos] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        fetchTodos();
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    };

    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response.data);
    };

    const handleAddTodo = async (todo) => {
        const response = await addTodo(todo);
        setTodos([...todos, response.data]);
    };

    const handleUpdateTodo = async (id, updatedTodo) => {
        const response = await updateTodo(id, updatedTodo);
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <button onClick={toggleDarkMode} className="mode-toggle">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <h1 className='App-name'>To-Do List</h1>
            <TodoForm addTodo={handleAddTodo} />
            <TodoList todos={todos} updateTodo={handleUpdateTodo} deleteTodo={handleDeleteTodo} />
        </div>
    );
};

export default App;
