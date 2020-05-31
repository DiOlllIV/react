import React from 'react'
import {shallow} from 'enzyme'
import Mailbox from '../Mailbox'

describe('<Mailbox/>', () => {
  it('should return 2 unreadmessages', () => {
    const unreadMessages = [1, 2];
    const wrappedComponent = shallow(<Mailbox unreadMessages={unreadMessages} />);

    expect(wrappedComponent.find('.mailbox__count').text()).toEqual('2');
  });
});

describe('<Mailbox/>', () => {
  it('should return only Mailbox without unreadmessages', () => {
    const unreadMessages = [];
    const wrappedComponent = shallow(<Mailbox unreadMessages={unreadMessages}/>);

    expect(wrappedComponent.find('.mailbox__count').exists()).toEqual(false);
  });
});