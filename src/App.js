import React, {useEffect, useState} from 'react';

const Test = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('from main function');
    
        return () => {
            console.log('from cleanup function'); 
        }
       
    }, [counter]);

    return(
        <h2 onClick={() => setCounter(prev => prev + 1) }>From test component. Counter: {counter}</h2>
    )
}

export default function App() {

    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>onToggle</button>
            {isVisible && <Test />}
        </div>
    )
}