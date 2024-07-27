import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(todo.text);
    const [priority, setPriority] = useState(todo.priority);
    // const [dueDate, setDueDate] = useState(todo.dueDate);

    const handleToggleComplete = () => {
        updateTodo(todo.id, { ...todo, completed: !todo.completed });
    };

    const handleSave = () => {
        // updateTodo(todo.id, { ...todo, text: updatedText, priority, dueDate });
        updateTodo(todo.id, { ...todo, text: updatedText, priority });
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleComplete}
            />
            {isEditing ? (
                <div className="todo-details">
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
                    {/* <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    /> */}
                </div>
            ) : (
                <div className="todo-details">
                    <span className='todo-details-name' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    <span>{todo.priority}</span>
                    {/* {todo.dueDate && <span>{`${new Date(todo.dueDate).toLocaleDateString()}`}</span>} */}
                </div>
            )}
            <div className="todo-actions">
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>
                        <EditIcon />
                    </button>
                )}
                <button onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
