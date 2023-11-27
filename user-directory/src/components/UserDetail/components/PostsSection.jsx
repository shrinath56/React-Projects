import React, { useState } from "react";
import "./PostsSection.css";
import PostPopup from "./PostPopup";

const PostsSection = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openPostPopup = (post) => {
    setSelectedPost(post);
  };

  const closePostPopup = () => {
    setSelectedPost(null);
  };

  return (
    <div className='posts-section'>
      {posts.map((post) => (
        <div
          key={post.id}
          className='post-card'
          onClick={() => openPostPopup(post)}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

      {selectedPost && (
        <PostPopup post={selectedPost} onClose={closePostPopup} />
      )}
    </div>
  );
};

export default PostsSection;
