import React, { Component } from 'react';
import AllUsers from './components/allUsers/AllUsers'; 
import AllPostsComponent from './components/posts/AllPostsComponent';

class App extends Component {

    render() {

        return (
            <div>
                <AllUsers/>
                <AllPostsComponent/>
            </div>
        );
    }
}

export default App;