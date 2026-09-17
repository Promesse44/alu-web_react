import { render, unmountComponentAtNode } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('WithLogging', () => {
  it('logs Component Component is mounted and going to unmount for pure HTML', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const WrappedComponent = WithLogging(() => <p />);
    const { unmount } = render(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
    consoleSpy.mockRestore();
  });

  it('logs Component Login is mounted and going to unmount for Login component', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const WrappedLogin = WithLogging(Login);
    const { unmount } = render(<WrappedLogin />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    consoleSpy.mockRestore();
  });
});
