import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleRequestError, SERVER_API_BASE_URL } from "../../constants";

// --- //

let postCreatePost = createAsyncThunk(
  "postCreatePost",
  async (postContent, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(
        `${SERVER_API_BASE_URL}/api/v1/post`,
        postContent,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to create post")
      );
    }
  }
);

let getAllPosts = createAsyncThunk(
  "getAllPosts",
  async (params, { rejectWithValue }) => {
    let url = `${SERVER_API_BASE_URL}/api/v1/post?userID=${
      params?.userID || ""
    }&page=${params?.page || 1}&limit=${params?.limit || 5}`;

    try {
      let { data } = await axios.get(url, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to get all posts")
      );
    }
  }
);

let getSinglePost = createAsyncThunk(
  "getSinglePost",
  async (postID, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(
        `${SERVER_API_BASE_URL}/api/v1/post/${postID}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to get requested post!")
      );
    }
  }
);

let patchUpdatePost = createAsyncThunk(
  "patchUpdatePost",
  async (params, { rejectWithValue }) => {
    try {
      let { data } = await axios.patch(
        `${SERVER_API_BASE_URL}/api/v1/post/${params?.postID}`,
        { content: params?.content },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to update post!")
      );
    }
  }
);

let deletePost = createAsyncThunk(
  "deletePost",
  async (postID, { rejectWithValue }) => {
    try {
      let { data } = await axios.delete(
        `${SERVER_API_BASE_URL}/api/v1/post/${postID}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to delete post!")
      );
    }
  }
);

export {
  postCreatePost,
  getAllPosts,
  getSinglePost,
  patchUpdatePost,
  deletePost,
};
