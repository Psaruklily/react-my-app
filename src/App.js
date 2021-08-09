import React, {useState, useEffect, useReducer} from 'react';

const initialState = {
    completed: false,
    id: null,
    title: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SET_TODO": {
            return action.payload;
        }
        case "CHANGE_TODO_STATUS": {
            return {
                ...state,
                completed: !state.completed
            }
        }
        case "CHANGE_TODO_TITLE": {
            return {
                ...state,
                title: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default function App() {

    const [counter, setCounter] = useState(1);
    const [user, setUser] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [todo, setTodo] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                // setUser(json);
                dispatch({type: 'SET_TODO', payload: json});
            });
        return () => { console.log('unmount'); }
    }, [counter]);

    const increaseCounter = () => {
        setCounter(prev => prev + 1);
    }

    const onStatusChange = () => dispatch({type: 'CHANGE_TODO_STATUS'});
     const onTitleChange = () => dispatch({type: 'CHANGE_TODO_TITLE', payload: Math.random()});

    return(
        <div>
            <h1>
                Fake users from jsonplaceholder:
            </h1>
            {
                !!state && (
                    <>
                        <h2>{state.id}</h2>
                        <h2>{state.title}</h2>
                        <h2>{state.completed.toString()}</h2>
                    </>
                )
            }
            <button onClick={increaseCounter}>new user</button>
            <button onClick={onStatusChange}>Change todo status</button>
            <button onClick={onTitleChange}>Change todo title</button>
        </div>
    )
}