import React, { Component } from 'react';
import AllUsersComponent from './components/allUsers/AllUsersComponent';
import AllCommentsComponent from './components/comments/AllCommentsComponent';
import AllPostsComponent from './components/posts/AllPostsComponent';

class App extends Component {    
    render() {
        return (
            <div>
              <AllUsersComponent/>
              <AllPostsComponent/>
              <AllCommentsComponent/>
            </div>
        );
    }
}

export default App;