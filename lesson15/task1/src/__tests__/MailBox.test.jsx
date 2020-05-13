import React from 'react'
import {shallow} from 'enzyme'
import Mailbox from '../Mailbox'

describe('<Mailbox/>', () => {
  it('should return 2 unreadmessages', () => {
    const unreadMessages = [1, 2];
    const wrappedComponent = shallow(<Mailbox unreadMessages={unreadMessages} />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});

describe('<Mailbox/>', () => {
  it('should return only Mailbox without undereadmessages', () => {
    const unreadMessages = [];
    const wrappedComponent = shallow(<Mailbox unreadMessages={unreadMessages}/>);

    expect(wrappedComponent).toMatchSnapshot();
  });
});