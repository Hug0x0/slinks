import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the website grid and opens and closes a selected site', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /select your slink/i })).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(8);
  fireEvent.click(screen.getByText('Avnu'));
  expect(screen.getByTitle('Active Website')).toHaveAttribute('src', 'https://app.avnu.fi/');
  fireEvent.click(screen.getByRole('button', { name: 'X' }));
  expect(screen.queryByTitle('Active Website')).not.toBeInTheDocument();
  expect(screen.getByText('Ekubo')).toBeInTheDocument();
});
