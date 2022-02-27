import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/posts/actions";
import { Button } from "@mui/material";

const Api = () => {
  const { posts, isLoading, isError } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <p>is Loading: {isLoading.toString()}</p>
      {isError && (
        <Button
          onClick={() => {
            dispatch(fetchPosts());
          }}
        >
          Reload
        </Button>
      )}
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ borderBottom: "1px solid black", marginBottom: 5 }}
        >
          <p style={{ fontSize: 12, fontWeight: "600" }}> {post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Api;
