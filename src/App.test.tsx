import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  const brandElement = screen.getByText(/tamle\.cv/i);
  expect(brandElement).toBeInTheDocument();
});
