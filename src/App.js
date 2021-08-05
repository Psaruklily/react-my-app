import React, {useState, useEffect, useReducer } from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_TODO": {
            return action.payload;
        }
        case "CHANGE_TODO_STATUS": {
            return {
                ...state,
                completed: !state.completed,
            };
        }
        case "CHANGE_TODO_TITLE": {
            return {
                ...state,
                title: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

const initialState = {
    userId: null,
    id: null,
    title: '',
    completed: false
}

export default function App() {

    const [counter, setCounter] = useState(1);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log('Called useEffect');

        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        .then(response => response.json())
        .then(json => {
            dispatch({type: 'SET_TODO', payload: json})
        })
    }, [counter]);

    const onClickHandler = () => setCounter((prev) => prev + 1);
    const onStatusChange = () => dispatch({type: 'CHANGE_TODO_STATUS'});
    const onTitleChange = () => dispatch({type: 'CHANGE_TODO_TITLE', payload: Math.random()});

    return(
        <div>
            <h1>Reacr hooks</h1>
            <h1>Counter</h1>

            <h1>{counter}</h1>

            {!!state  && (
                <>
                    <h2>{state.id}</h2>
                    <h2>{state.title}</h2>
                    <h2>{state.completed.toString()}</h2>
                </>
            )}
            
            <button onClick={onClickHandler}>+</button>
            <button onClick={onStatusChange}>Change todo status</button>
            <button onClick={onTitleChange}>Change todo title</button>
        </div>
    )
}

