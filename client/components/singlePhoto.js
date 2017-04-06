// Component for the functionality
// of single photo display
import Photo from './photo.js';
import React from 'react';
import Comments from './comments.js';

const SinglePhoto = React.createClass({
  render() {
    const {postId} = this.props.params;
    const ind = this.props.posts.findIndex((post) =>
                            post.code === this.props.params.postId);
    const post = this.props.posts[ind];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo ind={ind} post={post} {...this.props}/>
        <Comments postComments={postComments}/>
      </div>
    );
  }
});

export default SinglePhoto;