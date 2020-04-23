import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const rootElem = document.querySelector('#root');

const users = [
    {name: 'John', age: 24, id: 0},
    {name: 'Tom', age: 27, id: 1},
    {name: 'Sam', age: 23, id: 2},
    {name: 'Nik', age: 21, id: 3},
    {name: 'Marti', age: 34, id: 4},
    {name: 'Jerry', age: 42, id: 5},
    {name: 'James', age: 17, id: 6},
];

ReactDOM.render(<UsersList users={users} />, rootElem);