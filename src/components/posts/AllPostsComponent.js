import React, { Component } from 'react';
import { PostService } from '../../services/PostService';
import PostComponent from './PostComponent';

class AllPostsComponent extends Component {

  state = {posts: [], chosenPost: null};
  postService = new PostService;

  componentDidMount() {
    this.postService.getAllPosts().then(value => this.setState({posts: value}));
  }

  choseOnePost = (id) => this.setState({chosenPost: this.state.posts.find(post => post.id === id)})

    render() {
      let {posts, chosenPost} = this.state;
        return (
            <div>
               {
                 posts.map(value => <PostComponent 
                  item={value} 
                  key={value.id}
                  choseOnePost={this.choseOnePost}
                  isShowButton={true}/>)
               }
              <hr/>
              {
                chosenPost && <PostComponent item={chosenPost} isShowButton={false}/>
              }
            </div>
        );
    }
}

export default AllPostsComponent;