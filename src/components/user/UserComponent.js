import React, { Component } from 'react';

class UserComponent extends Component {    
    render() {

      let {item, selectThisUser, isShowButton} = this.props;

        return (
            <div>
              {item.id} - {item.name}
              {
                isShowButton && <button onClick={() => selectThisUser(item.id)}>Chose me</button>
              }
            </div>
        );
    }
}

export default UserComponent;