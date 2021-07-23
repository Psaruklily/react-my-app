import React, { Component } from 'react';
import { UserService } from '../services/UserService';
import UserComponent from '../user/UserComponent';
import './AllUsers.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullUser from '../fullUser/FullUser';

class AllUsersComponent extends Component {

  state = {users: []};
  userService = new UserService();

  async componentDidMount() {
    let users = await this.userService.getAllUsers();
    this.setState({users});
  }

    render() {

      let {users} = this.state;
      let {match:{url}} = this.props;
      // console.log(this.props)
        return (
            <div>
              {
                users.map(user => <UserComponent item={user} key={user.id}/>)
              }

              <div className='nest'>
                <Switch>
                  <Route path={url + '/:id'} render={(props) => {
                    const {match: {params: {id}}} = props;
                    return <FullUser {...props} key={id}/>
                  }}/>
                </Switch>
              </div>
            </div>
        );
    }
}

export default withRouter(AllUsersComponent);