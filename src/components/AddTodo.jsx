import React, { useState } from "react";
import { TextField, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    //comprobacion de tarea existente
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }

  };
  

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2em',
      width: '50%'
    }}>
      <TextField
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        label="Añadir tarea"
        variant="outlined"
        style={{ width: '80%' }}
        multiline
      />
      <Fab color="primary" aria-label="add" onClick={handleAddTodo}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default AddTodo;
