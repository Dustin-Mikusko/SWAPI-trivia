import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading', () => {
  const wrapper = shallow(<Loading />);

  it('should render loading component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
