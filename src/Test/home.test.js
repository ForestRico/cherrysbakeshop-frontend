import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/Home/HomePage';

test('renders the "Hello World" message', () => {
  render(<HomePage />);
  const HomePageText = screen.getByText('About');
  expect(HomePageText).toBeInTheDocument();
});