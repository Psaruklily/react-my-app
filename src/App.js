import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AllComments from './components/all-comments/AllComments';
import AllPostsComponent from './components/all-posts/AllPostsComponent';
import AllUsersComponent from './components/all-users/AllUsersComponent';

class App extends Component {

    render() {

        return (
            <Router>
                <div>
                   <div>
                        <Link to={'/users'}>Users</Link>
                   </div>
                    <div>
                        <Link to={'/posts'}>Posts</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>Comments</Link>
                    </div>

                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <AllUsersComponent/>
                        }}/>
                        <Route path={'/posts'} component={AllPostsComponent}/>
                        <Route path={'/comments'} render={() => {
                            return <AllComments/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;