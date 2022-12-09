import { render, screen } from '@testing-library/react';
import App from './App';


test('shows a list of candidates to the user', () => {
  render(<App />);
  const list = screen.getAllByText(/New Candidates/i);
  expect(list).toHaveLength(1);
});

test('Allow the user to "undo" rejecting or approving a candidate', () => {
  render(<App />);
});

test('Allow the user to leave a note when rejecting/approving', () => {
  
});

test('View the list of candidates approved or rejected', () => {
  render(<App />);
});

test('when candidates list is zero, it will fetch', () => {
  render(<App />);
});
