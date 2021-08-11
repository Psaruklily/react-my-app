import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {INC_COUNTER, DEC_COUNTER, RESET_COUNTER} from './redux/action-types';

export default function App() {

    const counter = useSelector(({counter}) => counter);
    const dispatch = useDispatch();

    const handleInc = () => dispatch({type: INC_COUNTER});
    const handleDec = () => dispatch({type: DEC_COUNTER});
    const handleReset = () => dispatch({type: RESET_COUNTER});

    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleInc}>inc</button>
            <button onClick={handleDec}>dec</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}