import { render, screen } from '@testing-library/react';
import App from './App';

test('Test Titulo', () => {
  render(<App />);
  const headerText = screen.getByText(/2do Parcial de Ing de Sw - 2023/i);
  expect(headerText).toBeInTheDocument();
})