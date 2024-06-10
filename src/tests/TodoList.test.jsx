import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('Comprueba si se renderizan correctamente las tareas', () => {
  const tasks = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  render(<TodoList tasks={tasks} />);
  
  tasks.forEach(task => {
    expect(screen.getByText(task)).toBeInTheDocument();
  });
});