import React from 'react';
import { shallow } from 'enzyme';
import Logout from '../Logout';

describe('Logout', () => {
    it('should logout user on logout button click', () => {
        const mockLogout = jest.fn();
        const wrappedComponent = shallow(<Logout onLogin={mockLogout}/>);
        wrappedComponent.find('.logout').simulate('click');

        expect(mockLogout).toBeCalled();
    });
});