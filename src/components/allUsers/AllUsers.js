import React, { Component } from 'react';
import { UserService } from '../../services/UserService';
import User from '../user/User';

class AllUsers extends Component {

  userService = new UserService;

  state = {users: [], chosenUser: null};

  componentDidMount() {
    this.userService.getAllUsers().then(value => this.setState({users: value}));
  }

  currentUser = (id) => {
    this.setState({chosenUser: this.userService.getUserById(this.state.users, id)});
  }

    render() {
      let {users, chosenUser} = this.state;
        return (
            <div>
              {
                users.map(value => (<User 
                  item={value} 
                  key={value.id}
                  currentUser={this.currentUser}/>))
              }
              <hr/>
              {chosenUser && <h2>{chosenUser.id} - {chosenUser.name} - {chosenUser.address.city}</h2>}
            </div>
        );
    }
}

export default AllUsers;