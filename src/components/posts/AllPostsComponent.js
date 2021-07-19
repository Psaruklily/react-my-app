import React, { Component } from 'react';
import PostComponent from './PostComponent';


class AllPostsComponent extends Component {  
  
  state = {posts: [], chosenOnePost: null};
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(value => value.json())
      .then(value => value.splice(0, 10))
      .then(postsFromAPI => this.setState({posts: postsFromAPI}))
  }

  choseOnePost = (id) => {
    let chosenOnePost = this.state.posts.find(post => post.id === id);
    this.setState({chosenOnePost});
  }

    render() {

      let {posts, chosenOnePost} = this.state;

        return (
            <div>
              <h1>All Posts Page</h1>
              {
                posts.map(post => <PostComponent 
                  item={post} 
                  key={post.id}
                  choseOnePost={this.choseOnePost}
                  isShowButton={true}/>)
              }
              <hr/>
              {
                chosenOnePost && <PostComponent item={chosenOnePost} isShowButton={false}/>
              }
            </div>
        );
    }
}

export default AllPostsComponent;