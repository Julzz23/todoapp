
import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

const TodoItem = ({ todo }) => {
  return (
    <ListItem>
      <ListItemText primary={todo} />
    </ListItem>
  );
};

export default TodoItem;
