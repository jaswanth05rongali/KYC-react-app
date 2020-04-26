import React from 'react';
import { render } from '@testing-library/react';
import GovtIdWireframe2 from './App';

test('renders learn react link', () => {
  const { getByText } = render(<GovtIdWireframe2 />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
