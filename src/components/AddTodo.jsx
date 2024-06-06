import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
        maxWidth: "600px",
        margin: "auto",
        height: "4em",
      }}
    >
      <TextField
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        label="Anadir tarea"
        variant="outlined"
        margin="normal"
        style={{ flex: 3, width: "70%" }} // Asegura que TextField sea más largo que Button
      />
      <Button
        onClick={handleAddTodo}
        variant="outlined"
        color="primary"
        style={{ flex: 1, width: "30%" }}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
