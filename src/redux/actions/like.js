import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleRequestError } from "../../constants";

const toggleVideoLikeDislike = createAsyncThunk(
  "toggleVideoLikeUnlike",
  async (videoID, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(
        `/api/v1/like/toggle/video?videoID=${videoID}`,
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
        handleRequestError(error, "Failed to toggle like/dislike on Video!")
      );
    }
  }
);

const togglePostLikeDislike = createAsyncThunk(
  "togglePostLikeUnlike",
  async (postID, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(
        `/api/v1/like/toggle/post?postID=${postID}`,
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
        handleRequestError(error, "Failed to toggle like/dislike on Post!")
      );
    }
  }
);

const toggleCommentLikeDislike = createAsyncThunk(
  "toggleCommentLikeDislike",
  async (commentID, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(
        `/api/v1/like/toggle/comment?commentID=${commentID}`,
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
        handleRequestError(error, "Failed to toggle like/dislike on Comment!")
      );
    }
  }
);

const getLikedVideos = createAsyncThunk(
  "getLikedVideos",
  async (_, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(`/api/v1/like/videos`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to get liked videos!")
      );
    }
  }
);

const getLikedPosts = createAsyncThunk(
  "getLikedPosts",
  async (_, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(`/api/v1/like/posts`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to get liked posts!")
      );
    }
  }
);

const getLikedComments = createAsyncThunk(
  "getLikedComments",
  async (_, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(`/api/v1/like/comments`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to get liked comments!")
      );
    }
  }
);

export {
  toggleVideoLikeDislike,
  togglePostLikeDislike,
  toggleCommentLikeDislike,
  getLikedVideos,
  getLikedPosts,
  getLikedComments,
};
