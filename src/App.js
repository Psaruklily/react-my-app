import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incCounter, decCounter, resetCounter, setTodos} from './redux/action-creators';

export default function App() {

    // const counter = useSelector(({counter}) => counter.counter);
    // const todos = useSelector(({todos}) => counter.todos); // one way
   
    const storeData = useSelector(({counter: {counter}, todos: {todos}}) => ({todos, counter}));

    const dispatch = useDispatch();

    const handleInc = () => dispatch(incCounter());
    const handleDec = () => dispatch(decCounter());
    const handleReset = () => dispatch(resetCounter());

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();

        dispatch(setTodos(result));
    }

    return(
        <div>
            <h2>Counter: {storeData.counter}</h2>
            <button onClick={handleInc}>inc</button>
            <button onClick={handleDec}>dec</button>
            <button onClick={handleReset}>reset</button>

            {
                storeData.todos.map(todo => (
                    <h2 key={todo.id}>{todo.id} - {todo.title}</h2>
                ))
            }
        </div>
    )
}