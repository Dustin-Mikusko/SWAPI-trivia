import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe.only('Header', () => {
  const user = {
    name: "Tom Brady",
    quote: "My favorite ring is the next one.",
    rank: "beginner" 
  };


  it('should render component to match snapshot with data passed correctly', () => {
    const wrapper = shallow(<Header 
      user={user}
      logOut={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call the userLogOut function when the image is clicked', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<Header 
      user={user}
      logOut={logOutMock}
    />);
    
    wrapper.find('Link').simulate('click');

    expect(logOutMock).toHaveBeenCalled();
  })
})
