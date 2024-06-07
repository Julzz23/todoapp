import React, { useState } from "react";
import { Typography } from "@mui/material";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, completed: false }]);
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        To do App
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2em",
          border: "1px solid black",
          borderBottom: "none",
          padding: "2em",
          margin: "0 auto",
          width: "80%",
          height: "75vh",
        }}
      >
        <AddTodo onAddTodo={handleAddTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default TodoApp;
