import React, { useState } from 'react';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input }]);
            setInput('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const saveTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: editText } : todo
        ));
        setEditId(null);
        setEditText('');
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {editId === todo.id ? (
                            <>
                                <input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => saveTodo(todo.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{todo.text}</span>
                                <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
                            </>
                        )}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}