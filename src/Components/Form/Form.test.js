import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper;
  let mockAddUser;

  beforeEach(() => {
    mockAddUser = jest.fn();
    wrapper = shallow(<Form addUser={mockAddUser}/>)
  });

  it('should match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(<Form 
      addUser={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: {name: 'name', value: 'Tom Brady'} };
    const expected = 'Tom Brady';

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state('name')).toEqual(expected);
  });

  it('should clear the clear the name, quote, and rank values in state when clearInputs is called', () => {
    const expected = {
      name: '',
      quote: '',
      rank: ''
    }

    wrapper.setState({
      name: 'Tom Brady',
      quote: 'My favorite ring is the next one.',
      rank: 'beginner'
    });

    wrapper.instance().clearInputs();

    expect(wrapper.state()).toEqual(expected);
  });

  it('should call addUser and clearInputs when submitUser is called', () => {
    wrapper.instance().clearInputs = jest.fn();

    wrapper.instance().submitUser();

    expect(mockAddUser).toHaveBeenCalled();
    expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  })

})
