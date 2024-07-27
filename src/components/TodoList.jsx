import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo, handleSort }) => {
    return (
        <div>
            <div className="todo-header">
                <span onClick={() => handleSort('text')} className="sortable">Task</span>
                <span onClick={() => handleSort('priority')} className="sortable">Priority</span>
                {/* <span>Date</span> */}
                <span>Actions</span>
            </div>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
