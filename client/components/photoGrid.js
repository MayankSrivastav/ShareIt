// Component for functionality
// of creating the photo grid

import React from 'react';
import Photo from './photo.js';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, ind) => <Photo {
          ...this.props} keys={ind} ind={ind} post={post} />)}
      </div>
    );
  }
});

export default PhotoGrid;