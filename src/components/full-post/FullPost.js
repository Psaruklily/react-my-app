import React, {Component} from 'react';
import { PostsService } from '../services/PostsService';

class FullPost extends Component {

  state = {post: null};
  postService = new PostsService();

  async componentDidMount() {
    let {match: {params: {id}}} = this.props;
    let post = await this.postService.getPost(id);
    this.setState({post});
  }

  render() {
    let {post} = this.state;
    return(
      <div>
        {post && <div>{post.id} - {post.title} - {post.body}</div>}
      </div>
    )
  }
}

export default FullPost;