import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders the menu item', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does not render the drawer when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('renders the drawer when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('calls handleDisplayDrawer when the menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />,
    );
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when the close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer handleHideDrawer={handleHideDrawer} />,
    );
    wrapper.find('.close-button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});