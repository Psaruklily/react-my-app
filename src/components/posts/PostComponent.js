import React, { Component } from 'react';

class PostComponent extends Component {

    render() {

      let {item, choseOnePost, isShowButton} = this.props;

        return (
            <div>
               {item.id} - {item.title}
               {
                isShowButton && <button onClick={() => choseOnePost(item.id)}>Chose me</button>
               }
            </div>
        );
    }
}

export default PostComponent;