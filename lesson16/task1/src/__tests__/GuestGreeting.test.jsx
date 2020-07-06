import React from 'react';
import { mount } from 'enzyme';
import GuestGreeting from '../GuestGreeting';

describe('UserGreeting', () => {
    it('should display user greeting', ()=>{
        const wrappedComponent = mount(<GuestGreeting />);

        expect(wrappedComponent).toMatchSnapshot();
    });
});