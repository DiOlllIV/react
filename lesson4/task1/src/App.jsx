import React from 'react';
import Counter from './Counter';

const App = () => {
    return (
        <>
            <Counter start={20} setInterval={2000} />
            <Counter start={10} setInterval={1500} />
            <Counter />
        </>
    );
};

export default App;