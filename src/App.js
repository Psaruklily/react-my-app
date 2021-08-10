import React, {useState, useMemo, memo} from 'react';

const Test = () => {

    const [counter, setCounter] = useState(0);

    return(
        <h2 onClick={() => setCounter(prev => prev + 1) }>From test component. Counter: {counter}</h2>
    )
}

export default function App() {

    const [isVisible, setIsVisible] = useState(false);
    const [arr, setArr] = useState([1, 444, 567, 45]);

    const totalPrice1 = useMemo(() => {
        return arr.reduce((acc, el) => (acc += el), 0);
    }, [arr]);

    return(
        <div>
            <h2>total prices: {totalPrice1}</h2>
            <button onClick={() => setIsVisible(!isVisible)}>onToggle</button>
            <button onClick={() => setArr([...arr, Math.random( )])}>Push new number</button>

            {isVisible && <Test />}
        </div>
    )
}