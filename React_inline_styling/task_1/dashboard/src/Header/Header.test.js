import React from 'react';
import { render, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders the logo and title', () => {
    render(<Header />);
    expect(screen.getByAltText('holberton logo')).toBeInTheDocument();
    expect(screen.getByText('School dashboard')).toBeInTheDocument();
  });
});
