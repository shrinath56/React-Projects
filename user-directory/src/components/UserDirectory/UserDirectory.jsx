import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./UserDirectory.css";

const UserDirectory = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchUserData();
    fetchPostData();
  }, []);

  return (
    <div>
      <h3 className='header-directory'>Directory</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className='user-card'>
              <Link to={`/user/${user.id}`} className='user-link'>
                <div className='user-details'>
                  <div>{user.name}</div>
                  <div>
                    Total Posts:{" "}
                    {posts.filter((post) => post.userId === user.id).length}
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDirectory;
