import React from 'react';
import {shallow} from 'enzyme';
import CreateTaskInput from '../CreateTaskInput';

describe('<CreateTaskInput />', () => {
    it('Should create task on submit', () => {
        const mockOnCreate = jest.fn();
        const wrappedComponent = shallow(
            <CreateTaskInput onCreate={mockOnCreate}/>
        );
        const fakeEvent = { target: { value: 'Another task' } }
        wrappedComponent
            .find('.create-task__input')
            .simulate('change', fakeEvent)
        wrappedComponent.find('.create-task__btn').simulate('click');

        expect(mockOnCreate).toBeCalledWith('Another task');
    });

    it('Should create task on submit', () => {
        const mockOnCreate = jest.fn();
        const wrappedComponent = shallow(
            <CreateTaskInput onCreate={mockOnCreate}/>
        );
        const fakeEvent = { target: { value: 'Another task' } }
        wrappedComponent
            .find('.create-task__input')
            .simulate('change', fakeEvent)
        wrappedComponent.find('.create-task__btn').simulate('click');

        expect(wrappedComponent
            .find('.create-task__input').text())
            .toEqual('');
    });
});