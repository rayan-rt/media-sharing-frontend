import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleRequestError, SERVER_API_BASE_URL } from "../../constants";

const postUploadVideo = createAsyncThunk(
  "postUploadVideo",
  async (videoData, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(
        `${SERVER_API_BASE_URL}/api/v1/video/`,
        videoData,
        {
          withCredentials: true,
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to upload video!")
      );
    }
  }
);

const getAllVideos = createAsyncThunk(
  "getAllVideos",
  async (params, { rejectWithValue }) => {
    let url = `${SERVER_API_BASE_URL}/api/v1/video?userID=${
      params?.userID || ""
    }&query=${params?.query || ""}&page=${params?.page || 1}&limit=${
      params?.limit || 5
    }`;
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
        handleRequestError(error, "Failed to get videos!")
      );
    }
  }
);

const getSubscribedUsersVideos = createAsyncThunk(
  "getSubscribedUsersVideos",
  async (params, { rejectWithValue }) => {
    try {
      let url = `${SERVER_API_BASE_URL}/api/v1/video/subscribedUsersVideos?query=${
        params?.query || ""
      }&page=${params?.page || 1}&limit=${params?.limit || 5}`;

      let { data } = await axios.get(url, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to get subscribed users videos!")
      );
    }
  }
);

const getSingleVideo = createAsyncThunk(
  "getSingleVideo",
  async (videoID, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(
        `${SERVER_API_BASE_URL}/api/v1/video/${videoID}`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(handleRequestError(error, "Failed to get video!"));
    }
  }
);

const deleteSingleVideo = createAsyncThunk(
  "deleteSingleVideo",
  async (videoID, { rejectWithValue }) => {
    try {
      let { data } = await axios.delete(
        `${SERVER_API_BASE_URL}/api/v1/video/${videoID}`,
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
        handleRequestError(error, "Failed to delete video!")
      );
    }
  }
);

let patchUpdateVideo = createAsyncThunk(
  "patchUpdateVideo",
  async ({ videoID, videoData }, { rejectWithValue }) => {
    try {
      let { data } = await axios.patch(
        `${SERVER_API_BASE_URL}/api/v1/video/${videoID}`,
        videoData,
        {
          withCredentials: true,
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        handleRequestError(error, "Failed to update video!")
      );
    }
  }
);

export {
  postUploadVideo,
  getAllVideos,
  getSubscribedUsersVideos,
  getSingleVideo,
  deleteSingleVideo,
  patchUpdateVideo,
};
