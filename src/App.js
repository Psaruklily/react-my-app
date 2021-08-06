import React, {useState, useEffect} from 'react';

export default function App() {

    const [counter, setCounter] = useState(1);
    const [user, setUser] = useState();
    // const [todo, setTodo] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setUser(json);
            })
    }, [counter]);

    const increaseCounter = () => {
        setCounter(prev => prev + 1);
    }

    return(
        <div>
            <h1>
                Fake users from jsonplaceholder:
            </h1>
            {
                !!user && (
                    <>
                        <h2>{user.id}</h2>
                        <h2>{user.title}</h2>
                        <h2>{user.completed.toString()}</h2>
                    </>
                )
            }
            <button onClick={increaseCounter}>new user</button>
        </div>
    )
}