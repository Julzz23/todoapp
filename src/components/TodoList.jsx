import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const theme = useTheme();

  return (
    <div>
      {todos.map((todo, index) => (
        <div
          key={index}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            fontSize: "1.3em",
            fontFamily: "Arial, sans-serif",
            color: theme.palette.text.primary,
            margin: "0.5em 0",
            padding: "0.1em",
            borderRadius: "5px",
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{flex:1, textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <div>
            <IconButton
              onClick={() => toggleTodo(index)}
              style={{ color: "green" }}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              onClick={() => deleteTodo(index)}
              style={{ color: "red" }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
