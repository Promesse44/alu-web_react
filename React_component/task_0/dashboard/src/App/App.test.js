import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders a div with the class App-header', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-header')).toBeInTheDocument();
  });

  it('renders a div with the class App-body', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-body')).toBeInTheDocument();
  });

  it('renders a div with the class App-footer', () => {
    const { container } = render(<App />);
    expect(container.querySelector('.App-footer')).toBeInTheDocument();
  });
});
