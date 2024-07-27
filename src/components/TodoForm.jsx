import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('Low');
    // const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // addTodo({ text, completed: false, priority, dueDate });
        addTodo({ text, completed: false, priority });
        setText('');
        setPriority('Low');
        // setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new to-do"
                required
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
            <button type="submit">
                <AddIcon />
            </button>
        </form>
    );
};

export default TodoForm;
