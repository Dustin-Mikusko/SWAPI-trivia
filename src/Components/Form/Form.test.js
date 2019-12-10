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

  it('should call addUser when submitUser is called', () => {
    const mockState = {
      name: "Tom Brady",
      quote: "My favorite ring is the next one.",
      rank: "GOAT",
    };
    const mockUser = {
      name: mockState.name,
      quote: mockState.quote,
      rank: mockState.rank,
      favoriteCharacters: [],
      loggedIn: true
    }

    wrapper.setState({ name: mockState.name, quote: mockState.quote, rank: mockState.rank })
    wrapper.instance().submitUser();

    expect(mockAddUser).toHaveBeenCalledWith(mockUser);
  });

  describe('checkInputs', () => {
    it('should keep state error properties as false if all inputs have content on button click', () => {
      const mockState = {
        name: 'Tom Brady',
        quote: 'The ring quote',
        rank: 'beginner', 
        error: {
          name: false,
          quote: false,
          rank: false
        }
      }

      wrapper.setState(mockState);

      wrapper.find('button').simulate('click');
      expect(wrapper.state('error')).toEqual(mockState.error);
    });

    it('should change the state error property to true if corresponding input is empty on button click', () => {
      const mockState = {
        name: '',
        quote: 'The ring quote',
        rank: 'beginner', 
        error: {
          name: false,
          quote: false,
          rank: false
        }
      };
      const mockErrorState = {
          name: true,
          quote: false,
          rank: false
      };

      wrapper.setState(mockState);
      wrapper.find('button').simulate('click');
      expect(wrapper.state('error')).toEqual(mockErrorState)
    })
  });

  describe('checkReady', () => {
    it('should call submitUser if all error state properties are false', () => {
      wrapper.instance().submitUser = jest.fn();
      const mockErrorState = {
        name: false,
        quote: false,
        rank: false
      };

      wrapper.setState({ error: mockErrorState});
      wrapper.instance().checkReady();
      expect(wrapper.instance().submitUser).toHaveBeenCalled();
    });

    it('should return null if any of the error state properties are true', () => {
      const mockErrorState = {
        name: true,
        quote: false,
        rank: false
      };
      
      wrapper.setState({ error: mockErrorState });
      expect(wrapper.instance().checkReady()).toEqual(null);

    });
  })
  
})
