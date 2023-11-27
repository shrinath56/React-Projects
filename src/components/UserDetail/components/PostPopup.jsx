import React from "react";
import "./PostPopup.css";

const PostPopUp = ({ post, onClose }) => {
  return (
    <div className='post-popup-overlay' onClick={onClose}>
      <div className='post-popup-content' onClick={(e) => e.stopPropagation()}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PostPopUp;
