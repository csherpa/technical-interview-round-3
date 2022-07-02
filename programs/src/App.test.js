import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn more link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn more/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders program name', () => {
  render(<App />);
  const programName = screen.getByText(/Program Name/i);
  expect(programName).toBeInTheDocument();
})

test('renders institution  name', () => {
  render(<App />);
  const institutionName = screen.getByText(/Institution Name/i);
  expect(institutionName).toBeInTheDocument();
})