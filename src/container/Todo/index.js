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

            <div style={{ marginTop: '24px', maxWidth: '360px' }}>
                <svg
                    viewBox="0 0 783 1090"
                    width="100%"
                    role="img"
                    aria-label="Mistakes are proof that you are trying."
                >
                    <defs>
                        <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="0.6">
                            <stop offset="0%" stopColor="#b4dfa0" />
                            <stop offset="55%" stopColor="#a8d89a" />
                            <stop offset="100%" stopColor="#b7e3a8" />
                        </linearGradient>
                        <linearGradient id="gMid" x1="0" y1="0" x2="1" y2="0.8">
                            <stop offset="0%" stopColor="#b6d3f5" />
                            <stop offset="55%" stopColor="#a9c8ee" />
                            <stop offset="100%" stopColor="#bddbf9" />
                        </linearGradient>
                        <linearGradient id="gBot" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#d8acd9" />
                            <stop offset="55%" stopColor="#cb8ccc" />
                            <stop offset="100%" stopColor="#b879bd" />
                        </linearGradient>
                        <filter id="water" x="-10%" y="-10%" width="120%" height="120%">
                            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="3" seed="7" />
                            <feDisplacementMap in="SourceGraphic" scale="12" />
                        </filter>
                        <filter id="paperGrain">
                            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="5" />
                            <feColorMatrix type="saturate" values="0" />
                            <feComponentTransfer>
                                <feFuncA type="table" tableValues="0 0.045" />
                            </feComponentTransfer>
                        </filter>
                    </defs>

                    <rect x="8" y="8" width="767" height="1074" rx="2" fill="#ffffff" />

                    <g filter="url(#water)">
                        <path d="M12 14h759v276c-118-18-197 17-309 5-138-14-214 15-450-8z" fill="url(#gTop)" />
                        <path d="M12 270c112-23 183 13 294 3 146-12 255 9 465-5v460c-108-17-192 12-322 1-165-14-267 24-437-2z" fill="url(#gMid)" />
                        <path d="M12 716c129-32 237 16 381-5 131-18 235 18 378 0v364H12z" fill="url(#gBot)" />
                    </g>

                    <rect x="12" y="12" width="759" height="1066" fill="#ffffff" opacity="0.04" filter="url(#paperGrain)" />

                    <g fill="#101722" fontFamily="'Segoe Script', 'Brush Script MT', cursive" textAnchor="middle">
                        <text x="391.5" y="230" fontSize="130">Mistakes</text>
                        <text x="391.5" y="430" fontSize="124">are proof</text>
                        <text x="391.5" y="625" fontSize="124">that you</text>
                        <text x="391.5" y="825" fontSize="148">are trying.</text>
                    </g>
                </svg>
            </div>
        </div>
    );
}
