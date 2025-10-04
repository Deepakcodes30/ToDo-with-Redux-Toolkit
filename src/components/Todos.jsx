import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditingId(null);
    setEditText("");
  };

  return (
    <>
      <div className="text-xl font-bold text-white">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
            />

            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="ml-2 px-2 py-1 rounded text-black"
              />
            ) : (
              <div
                className={`ml-2 text-white ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}>
                {todo.text}
              </div>
            )}

            <div className="space-x-2">
              {editingId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="text-white bg-green-500 py-1 px-3 rounded hover:bg-green-600">
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-blue-500 py-1 px-3 rounded hover:bg-blue-600">
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 py-1 px-3 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
