import React, { Component } from 'react';
import Users from './components/Users';
import {Context} from './services/ContexService';

class App extends Component {

    state = { users: [] };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({ users: value });
            })
    }

    render() {

        const { users } = this.state;

        return (
            <Context.Provider value={'hello Lili!!'}>
                <div>
                    <Users items={users} />
                </div>
            </Context.Provider>
        );
    }
}

export default App;