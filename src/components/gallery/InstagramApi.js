import React, { useEffect, useState } from "react";
import api from "../api/Posts";

const InstagramApi = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get(
          "https://graph.facebook.com/v15.0/17866681364783155?fields=media_url&access_token=EAAJqkH24Hn4BADjpZBAwVhFU8IpIs2Q334g148L5hPRYUuKzoyGpDfkXaWIAifYWxlznXOaTeXUYUnBwHVWrXC2wN9MaeWl5Ok6pKw3x2pUeoKBjX0R41omHgZAApdjAmLmVUoUa3OQjoHZAjGNXsTFXUg5EmhwZBZCHFZBvNNPpZAt6cEKU3ZAG"
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
  // console.log(posts);

  return (
    <div>
      {Object.values(posts).map((post, key) => {
        console.log(post);
        return (
          <div key={key}>
          
            <img style={{ width: 300 }} src={post} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default InstagramApi;
