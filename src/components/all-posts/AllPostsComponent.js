import React, { Component } from 'react';
import { PostsService } from '../services/PostsService';
import PostComponent from '../post/PostComponent';

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

        return (
            <div>
              {
                posts.map(post => <PostComponent item={post} key={post.id}/>)
              }
            </div>
        );
    }
}

export default AllPostsComponent;