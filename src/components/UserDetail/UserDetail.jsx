import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./UserDetail.css";
import Clock from "./components/Clock.jsx";
import UserProfileSection from "./components/UserProfileSection";
import PostsSection from "./components/PostsSection";

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]); // Add state for posts

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    // Fetch posts data
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching user posts: ", error);
      }
    };

    fetchUserData();
    fetchUserPosts();
  }, [userId]);

  return (
    <div className='user-detail-container'>
      <div className='header-container'>
        <Link to='/' className='back-button'>
          Back
        </Link>
        {user && <Clock />}
      </div>
      {user && (
        <div className='user-detail-content'>
          <UserProfileSection user={user} />
          <PostsSection posts={posts} />
        </div>
      )}
    </div>
  );
};

export default UserDetail;
