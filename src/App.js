import React, { Component } from 'react';
import UserComponent from './components/user/UserComponent';

class App extends Component {

    users = [
        {name: 'Lili', age: 24, status: true},
        {name: 'Oleh', age: 28, status: true},
        {name: 'Nastya', age: 10, status: false},
        {name: 'Oleksii', age: 20, status: false},
        {name: 'Andrii', age: 23, status: true}
    ]

    render() {

        return (
            <div>
               {this.users.map((value, index) => {
                   let name = 'target';
                   if(index % 2) {
                       name = 'point';
                   }
                   return (<UserComponent item={value} clsName={name} key={index}/>)
               })}
            </div>
        );
    }
}

export default App;