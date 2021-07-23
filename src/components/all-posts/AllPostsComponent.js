import React, { Component } from 'react';
import { PostsService } from '../services/PostsService';
import PostComponent from '../post/PostComponent';
import FullPost from '../full-post/FullPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


class AllPostsComponent extends Component {

  state = {posts: []};
  postsService = new PostsService();

  async componentDidMount() {
    let posts = await this.postsService.getAllPosts();
    let tenPosts = posts.slice(0, 10);
    this.setState({posts: tenPosts});
  }

    render() {

      let {posts} = this.state;
      let {match: {url}} = this.props;
        return (
            <div>
              {
                posts.map(post => <PostComponent item={post} key={post.id}/>)
              }
              <hr/>
             <Switch>
              <Route path={url + '/:id'} render={(props) => {
                  const {match: {params: {id}}} = props;
                  return <FullPost {...props} key={id}/>
                }}/>
             </Switch>
            </div>
        );
    }
}

export default withRouter(AllPostsComponent);