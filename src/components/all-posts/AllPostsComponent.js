import React, { Component } from 'react';
import { PostsService } from '../services/PostsService';

class AllPostsComponent extends Component {

  state = {posts: []};
  postsService = new PostsService();

  async componentDidMount() {
    let posts = await this.postsService.getAllPosts();
    this.setState({posts});
  }

    render() {

        return (
            <div>
              All posts are here!
            </div>
        );
    }
}

export default AllPostsComponent;