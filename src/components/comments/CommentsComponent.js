import React, { Component } from 'react';

class CommentsComponent extends Component {    
    render() {

      let {item, choseOneComment} = this.props;

        return (
            <div>
              {item.id} - {item.name} - <button onClick={() => {choseOneComment(item.id)}}>Chose me</button>
            </div>
        );
    }
}

export default CommentsComponent;