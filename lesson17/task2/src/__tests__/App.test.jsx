import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { getEventsList, createEvent, deleteEvent } from '../EventsGateway';

jest.mock('../EventsGateway', () => {
    return {
        getEventsList: jest.fn(),
    }
})

describe('<App />', () => {
    it('Should request events list', () => {
        shallow(<App />);

        expect(getEventsList).toBeCalled();
    });

    it('Should display Header', () => {
        const wrappedComponent = shallow(<App />);

        expect(wrappedComponent.find('Header').exists()).toBeTruthy();
    });

    it('Should display week raw', () => {
        const wrappedComponent = shallow(<App />);

        expect(wrappedComponent.find('CalendarHead').exists()).toBeTruthy();
    });
    
    it('Should display column with 24h', () => {
        const wrappedComponent = shallow(<App />);

        expect(wrappedComponent.find('TimeColumn').exists()).toBeTruthy();
    });

    it('Should display table for calendar event', () => {
        const wrappedComponent = shallow(<App />);

        expect(wrappedComponent.find('CalendarTable').exists()).toBeTruthy();
    });

    it('Shouldnt display popup at first render on page', () => {
        const wrappedComponent = shallow(<App />);

        expect(wrappedComponent.find('Popup').exists()).toEqual(false);
    });
});