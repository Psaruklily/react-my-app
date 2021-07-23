import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class CommentComponent extends Component {

  render() {

    let {item, match: {url}} = this.props;
  
    return(
      <div>
        {item.id} - {item.email} - <Link to={`${url}/${item.id}`}>Info</Link>
      </div>
    )
  }
}

export default withRouter(CommentComponent);