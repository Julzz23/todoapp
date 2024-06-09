import { useTheme } from '@mui/material/styles';

const TodoList = ({ todos, toggleTodo }) => {
  const theme = useTheme();

  return (
    <div>
      {todos.map((todo, index) => (
        <div 
          key={index} 
          onClick={() => toggleTodo(index)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            fontSize: '1.3em', 
            fontFamily: 'Arial, sans-serif',
            color: theme.palette.text.primary, 
            margin: '1em 0', 
            padding: '1em', 
            borderRadius: '5px',
            backgroundColor: theme.palette.background.paper,
          }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default TodoList;