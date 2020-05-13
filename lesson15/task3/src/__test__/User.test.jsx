import React from 'react'
import {shallow} from 'enzyme'
import User from '../User'

describe('<User/>', () => {
  it('should return user with name James and Age 28', () => {
    const user = {
        name: "James",
        age: 28,
    }
    const wrappedComponent = shallow(<User name={user.name} age={user.age} />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
