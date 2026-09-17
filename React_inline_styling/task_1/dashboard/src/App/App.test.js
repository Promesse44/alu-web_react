import { render, fireEvent } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import App from './App';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

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

  it('calls logOut and alert when Ctrl+H is pressed', () => {
    const logOut = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<App logOut={logOut} />);
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalled();
    alertMock.mockRestore();
  });
});
