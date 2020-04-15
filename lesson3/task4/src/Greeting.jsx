import React from 'react';

const culcAge = (date) =>
Math.floor(((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)))

const Greeting = (props) => {
    return (  
          <div className="greeting">
              {`My name is ${props.firstName} ${props.lastName}. I'm ${culcAge(props.birthDate)} years old`}
          </div>
    );
};

export default Greeting