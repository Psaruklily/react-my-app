import React, { Component } from 'react';

class User extends Component {

    render() {

      let {item, currentUser} = this.props;

        return (
            <div>
                {item.id} - {item.name} <button onClick={() => {currentUser(item.id)}}>Chose me</button>
            </div>
        );
    }
}

export default User;