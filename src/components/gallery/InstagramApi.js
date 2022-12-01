import React, { useEffect, useState } from "react";
import api from "../api/Posts";

const InstagramApi = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(
          "https://v1.nocodeapi.com/udi/instagram/vsrnKpDcMKuiUbJa"
        );
        setPosts(response.data);
        
      } catch (error) {
        if (error) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(`Error:${error.message}`);
        }
      }
    };
    fetchPosts();
  }, []);
  console.log(posts);


  return <div>
    
  </div>;
};

export default InstagramApi;
