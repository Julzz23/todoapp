import React, { useState } from "react";
import { Typography,useTheme } from "@mui/material";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";



const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const theme = useTheme();
 

  const handleAddTodo = (newTodo) => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos, { text: newTodo, completed: false }];
  
      return newTodos.sort((a, b) => a.completed - b.completed);
    });
  };

  const toggleTodo = (index) => {
    setTodos(prevTodos => {
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
        color: 'primary', // Cambia esto al color que prefieras
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          color: '', // Cambia esto al color que prefieras para el hover
          transform: 'scale(1.1)', // Aumenta el tamaño del texto
        },
      }}
    >
      To do App
    </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2em",
          border: `1px solid ${theme.palette.secondary.main}`, // Usa el color del divisor del tema actual
          borderBottom: "none",
          padding: "2em",
          margin: "0 auto",
          width: "80%",
          height: "100%",
          overflowY: "auto",
          
        }}
      >
        <AddTodo onAddTodo={handleAddTodo} />
        
        <TodoList todos={todos}  toggleTodo={toggleTodo} />
        
      </div>
    </div>
  );
};

export default TodoApp;
