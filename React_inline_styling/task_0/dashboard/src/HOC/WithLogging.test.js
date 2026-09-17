import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
  let container;
  let root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    container.remove();
  });

  it('logs Component Component is mounted and going to unmount for pure HTML', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const WrappedComponent = WithLogging(() => <p />);

    act(() => {
      root.render(<WrappedComponent />);
    });
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');

    act(() => {
      root.unmount();
    });
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');

    consoleSpy.mockRestore();
  });

  it('logs Component Login is mounted and going to unmount for Login component', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const WrappedLogin = WithLogging(Login);

    act(() => {
      root.render(<WrappedLogin />);
    });
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');

    act(() => {
      root.unmount();
    });
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');

    consoleSpy.mockRestore();
  });
});
