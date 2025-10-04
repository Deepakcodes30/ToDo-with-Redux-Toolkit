import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
