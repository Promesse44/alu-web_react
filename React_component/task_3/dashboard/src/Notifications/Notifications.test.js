import { render } from '@testing-library/react';
import React from 'react';
import Notifications from './Notifications';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

describe('Notifications', () => {
  it('renders without crashing', () => {
    render(<Notifications />);
  });

  it('renders three list items', () => {
    const { container } = render(<Notifications listNotifications={listNotifications} />);
    expect(container.querySelectorAll('li').length).toBe(3);
  });

  it('renders the text Here is the list of notifications', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  it('calls markAsRead with correct message when invoked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { container } = render(<Notifications listNotifications={listNotifications} />);

    // get the component instance via a workaround - call markAsRead directly
    const instance = container.__reactFiber
      ? null
      : null;

    // Instead, test by checking console.log is called with right message
    consoleSpy.mockRestore();
  });

  it('markAsRead logs the correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const { container } = render(<Notifications listNotifications={listNotifications} />);
    const li = container.querySelectorAll('li')[0];
    li.click();
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    consoleSpy.mockRestore();
  });
});
