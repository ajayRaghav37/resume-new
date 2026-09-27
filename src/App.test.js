import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the resume header', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /ajay singh raghav/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 2, name: /work experience/i })).toBeInTheDocument();
});
