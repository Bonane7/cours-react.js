import { useEffect, useState } from "react";

const Post = () => {
  const [usPost, seteUsePost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      seteUsePost(data);

      console.log(data);
    };
    fetchPost();
  }, []);

  return (
    <div>


      {usPost.map((p) => {
        <h1>{p.title}</h1>;
      })}
    </div>
  );
};

export default Post;
