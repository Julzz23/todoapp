import {React} from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTodo from '../components/AddTodo';

test('Comprueba si se renderizan correctamente el campo de entrada y el botón', () => {
  render(<AddTodo />);
  const inputElement = screen.getByLabelText(/Añadir tarea/);
  const buttonElement = screen.getByRole('button');
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('Comprueba si el valor del campo de entrada se actualiza correctamente', () => {
  render(<AddTodo />);
  const inputElement = screen.getByLabelText(/Añadir tarea/);
  fireEvent.change(inputElement, { target: { value: 'Nueva tarea' } });
  expect(inputElement.value).toBe('Nueva tarea');
});

test('Comprueba si se llama a la función onAddTodo con el valor correcto cuando se hace clic en el botón de agregar', () => {
  const mockAddTodo = jest.fn();
  render(<AddTodo onAddTodo={mockAddTodo} />);
  const inputElement = screen.getByLabelText(/Añadir tarea/);
  const buttonElement = screen.getByRole('button');
  fireEvent.change(inputElement, { target: { value: 'Nueva tarea' } });
  fireEvent.click(buttonElement);
  expect(mockAddTodo).toHaveBeenCalledWith('Nueva tarea');
});