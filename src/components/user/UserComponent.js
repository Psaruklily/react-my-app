import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class UserComponent extends Component {

    render() {
      // console.log(this.props);
      let {item, match:{url}} = this.props;
      
        return (
            <div>
                {item.id} - {item.name} - <Link to={`${url}/${item.id}`}>info</Link>
            </div>
        );
    }
}

export default withRouter(UserComponent);