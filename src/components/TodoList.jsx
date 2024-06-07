const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div 
          key={index} 
          onClick={() => toggleTodo(index)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
};

export default TodoList;