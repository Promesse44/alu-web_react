import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" id={1} />);
  });

  it('calls markAsRead with the correct id when clicked', () => {
    const markAsRead = jest.fn();
    const { getByText } = render(
      <NotificationItem type="default" value="test" id={1} markAsRead={markAsRead} />
    );
    fireEvent.click(getByText('test'));
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
