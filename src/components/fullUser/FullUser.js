import React, {Component} from 'react';
import { UserService } from '../services/UserService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import AllPostsOfUser from '../all-posts-of-user/AllPostsOfUser';

class FullUser extends Component {

  state = {user: null};
  userService = new UserService();

  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let user = await this.userService.getUser(id);
    this.setState({user});
  }

  render() {
    let {user} = this.state;
    let {match: {url}} = this.props;
    let {match: {params: {id}}} = this.props;
    return (
      <div>
        {user && <div>{user.id} - {user.name} - {user.username} - {user.email} <Link to={url + '/posts'}>User's posts</Link> </div>}

        <Route path={url + '/posts'} render={() => {
          return <AllPostsOfUser userId={id} key={id}/>
        }}/>
        
      </div>
    )
  }
}

export default withRouter(FullUser);