import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const rootElem = document.querySelector('#root');

const culcAge = (date) =>
Math.floor(((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)))

const SearchField = (props) => {
    return (  
          <div className="greeting">
              {`My name is ${props.firstName} ${props.lastName}. I'm ${culcAge(props.birthDate)} years old`}
          </div>
    );
};

ReactDOM.render(<SearchField firstName="John" lastName="Doe" birthDate={new Date('2001-01-01T11:11:11.819Z')} />, rootElem)