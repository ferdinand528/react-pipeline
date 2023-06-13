import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificar texto del encabezado', () => {
  render(<App />);
  const headerText = screen.getByText(/2do Parcial de Ing de Sw - 2023/i);
  expect(headerText).toBeInTheDocument();
})