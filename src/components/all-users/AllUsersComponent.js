import React, { Component } from 'react';
import { UserService } from '../services/UserService';
import UserComponent from '../user/UserComponent';
import './AllUsers.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class AllUsersComponent extends Component {

  state = {users: []};
  userService = new UserService();

  async componentDidMount() {
    let users = await this.userService.getAllUsers();
    this.setState({users});
  }

    render() {

      let {users} = this.state;

        return (
            <div>
              {
                users.map(user => <UserComponent item={user} key={user.id}/>)
              }

              <div className='nest'>
                <Switch>
                  <Route path={'/users/:id'} render={(props) => {
                     console.log(props);
                    return 'asasa'
                  }}/>
                </Switch>
              </div>
            </div>
        );
    }
}

export default AllUsersComponent;