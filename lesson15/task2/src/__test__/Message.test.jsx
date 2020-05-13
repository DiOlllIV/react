import React from 'react';
import {shallow} from 'enzyme';
import Message from '../Message'

describe('<Message />', () => {
    it('sould return message with text', () => {
        const message = 'Hello';
        const wrappedComponent = shallow(<Message message={message} />);

        expect(wrappedComponent).toMatchSnapshot();
    });

    it('sould return empty message', () => {
        const message = '';
        const wrappedComponent = shallow(<Message message={message} />);

        expect(wrappedComponent).toMatchSnapshot();
    });
});