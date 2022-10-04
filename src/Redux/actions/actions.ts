import {createAsyncThunk} from '@reduxjs/toolkit';
import {GetPostsParams} from '../../Constants/types';
import {GetPostsAsync} from '../services/service';

export const getPosts = createAsyncThunk(
  'home/getPosts',
  async (data: GetPostsParams, thunkAPI) => {
    try {
      return await GetPostsAsync(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
