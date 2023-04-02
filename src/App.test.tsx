import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app name', () => {
  render(<App />);
  const title = screen.getByText(/idea. project/i);
  expect(title).toBeInTheDocument();
});
