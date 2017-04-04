import React from 'react';
import {Link} from 'react-router';

const Photo = React.createClass({
  render() {
    const {post, ind, comment} = this.props;
    
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button className="likes">&hearts; {post.likes}</button>
          </div>
        </figcaption>
      </figure>
    );
  }
});

export default Photo;