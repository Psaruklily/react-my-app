import React, {Component} from 'react';
import { CommentService } from '../services/CommentService';
import CommentComponent from '../comment/CommentComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullComment from '../full-post/FullPost';

class AllComments extends Component {

state = {comments: []};
commentService = new CommentService();

async componentDidMount() {
  let comments = await this.commentService.getAllComments();
  let tenComments = comments.slice(0, 10);
  this.setState({comments: tenComments});
}

  render() {
    let {comments} = this.state;
    let {match: {url}} = this.props;
    return(
      <div>
        {
          comments.map(comment => <CommentComponent item={comment} key={comment.id}/>)
        }
        <hr/>
        <Switch>
          <Route path={url + '/:id'} render={(props) => {
            let {match: {params: {id}}} = props;
            return <FullComment {...props} key={id}/>
          }}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(AllComments);