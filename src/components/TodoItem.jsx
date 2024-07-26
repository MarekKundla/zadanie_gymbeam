import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(todo.text);
    const [priority, setPriority] = useState(todo.priority);

    const handleToggleComplete = () => {
        updateTodo(todo.id, { ...todo, completed: !todo.completed });
    };

    const handleSave = () => {
        updateTodo(todo.id, { ...todo, text: updatedText, priority: priority });
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                    />
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
            ) : (
                <div>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={handleToggleComplete}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    <span>({todo.priority})</span>
                </div>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </li>
    );
};

export default TodoItem;
