import React from 'react'
import {shallow} from 'enzyme'
import MailBox from '../MailBox'

describe('<Mailbox/>', () => {
  it('should return 2 unreadmessages', () => {
    const unreadMessages = [1, 2];
    const wrappedComponent = shallow(<MailBox unreadMessages={unreadMessages} />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});

describe('<Mailbox/>', () => {
  it('should return only MailBox without undereadmessages', () => {
    const unreadMessages = [];
    const wrappedComponent = shallow(<MailBox unreadMessages={unreadMessages}/>);

    expect(wrappedComponent).toMatchSnapshot();
  });
});