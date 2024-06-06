import React, { useState } from "react";
import { Typography, Container } from "@mui/material";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <Container fixed>
      <Typography variant='h3' gutterBottom sx={{ textAlign: "center" }}>
        Todo App
      </Typography>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </Container>
  );
};

export default TodoApp;
