import React from 'react';

const Comments = React.createClass({
  renderComments(comment, ind) {
    return (
      <div className="comment" key={ind}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  },

  render(){
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComments)}
      </div>
    );
  }
});

export default Comments;