import React, { useState, useEffect } from "react";
import { Typography, useTheme } from "@mui/material";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Signature from "./Signature";

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const theme = useTheme();
  const signatureColor =
    theme.palette.type === "dark"
      ? "rgba(255, 255, 255, 0.5)"
      : "rgba(0, 0, 0, 0.5)";

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, { text: newTodo, completed: false }];

      return newTodos.sort((a, b) => a.completed - b.completed);
    });
  };
  const deleteTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo, i) => i !== index);
      return newTodos;
    });
  };

  const toggleTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );

      return newTodos.sort((a, b) => a.completed - b.completed);
    });
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
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          color: "primary", 
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            color: "", 
            transform: "scale(1.1)", 
          },
        }}
      >
        Todo app
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2em",
          border: `1px solid ${theme.palette.secondary.main}`,
          borderBottom: "none",
          padding: "2em",
          margin: "0 auto",
          width: "80%",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <AddTodo onAddTodo={handleAddTodo} />

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
      <Signature color={signatureColor} />
    </div>
  );
};

export default TodoApp;
