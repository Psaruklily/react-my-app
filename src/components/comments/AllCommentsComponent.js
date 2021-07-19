import React, { Component } from 'react';
import CommentsComponent from './CommentsComponent';

class AllCommentsComponent extends Component {  
  
  state = {comments: [], chosenComment: null};

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(value => value.json())
      .then(value => value.splice(0, 10))
      .then(dataFromAPI => this.setState({comments: dataFromAPI}))
  }

  choseOneComment = (id) => {
    let chosenCommentnt = this.state.comments.find(comment => comment.id === id);
    this.setState({choseOneComment: chosenCommentnt});
  }

    render() {

      let {comments, chosenComment} = this.state;

        return (
            <div>
              <h1>All Comments Page</h1>
              {
                comments.map(comment => <CommentsComponent 
                  item={comment} 
                  key={comment.id}
                  choseOneComment={this.choseOneComment}/>)
              }
              <hr/>
                {
                  chosenComment && <CommentsComponent item={chosenComment}/>
                }
            </div>
        );
    }
}

export default AllCommentsComponent;