import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('logs Component Component is mounted and going to unmount for pure HTML', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const WrappedComponent = WithLogging(() => <p />);

    act(() => { render(<WrappedComponent />, container); });
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    act(() => { unmountComponentAtNode(container); });
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');

    consoleSpy.mockRestore();
  });

  it('logs Component Login is mounted and going to unmount for Login component', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const WrappedLogin = WithLogging(Login);

    act(() => { render(<WrappedLogin />, container); });
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    act(() => { unmountComponentAtNode(container); });
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');

    consoleSpy.mockRestore();
  });
});
