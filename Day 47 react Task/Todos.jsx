import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './TodosSlice';

export default function TodoApp() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
