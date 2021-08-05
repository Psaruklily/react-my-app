import React, {useState, useEffect} from 'react';

export default function App() {

    const [counter, setCounter] = useState(1);
    const [todo, setTodo] = useState();

    useEffect(() => {
        console.log('Called useEffect');

        if([2, 4, 6].some((elem) => elem === counter)) {
            fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => setTodo(json))
        }
    }, [counter]);

    const onClickHandler = () => setCounter((prev) => prev + 1);

    return(
        <div>
            <h1>Reacr hooks</h1>
            <h1>Counter</h1>

            <h1>{counter}</h1>

            {!!todo && (
                <>
                    <h2>{todo.id}</h2>
                    <h2>{todo.title}</h2>
                    <h2>{todo.completed.toString()}</h2>
                </>
            )}
            
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}

