import React from 'react';
import Counter from './Counter';

const App = () => {
    return (
        <>
            <Counter start={20} interval={2000} />
            <Counter start={10} interval={1500} />
            <Counter />
        </>
    );
};

export default App;