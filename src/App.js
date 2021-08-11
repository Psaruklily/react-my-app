import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; // useSelector allows get some data from the store

export default function App() {

    const counter = useSelector(({counter}) => counter);
    const dispatch = useDispatch(); 

    return(
        <>
            <div><h2>Redux {counter}</h2></div>
            <button onClick={() => dispatch({type: 'INC_COUNTER'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>dec</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
        </>
    )
}