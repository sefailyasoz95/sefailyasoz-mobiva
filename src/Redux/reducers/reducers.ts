import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RedditAPIResponse, RedditChild} from '../../Constants/types';
import {getPosts} from '../actions/actions';

export const initialState = {
  error: false,
  success: false,
  message: '',
  loading: false,
  posts: [] as RedditChild[],
  after: '',
};

export const reducer = createSlice({
  name: 'global',
  initialState,
  reducers: {
    clearPosts: state => {
      state.posts = [];
      state.loading = true;
      state.after = '';
    },
  },
  extraReducers: builder => {
    builder
      // *********** GET POSTS START *********** \\
      .addCase(getPosts.pending, state => {
        state.loading = !(state.posts.length > 0);
      })
      .addCase(
        getPosts.fulfilled,
        (state, action: PayloadAction<RedditAPIResponse>) => {
          state.posts = [...state.posts, ...action.payload.data.children];
          state.after = action.payload.data.after;
          state.loading = false;
        },
      )
      .addCase(getPosts.rejected, (state, action: any) => {
        state.error = true;
        state.loading = false;
        // *********** GET POSTS END *********** \\
      });
  },
});

export const {clearPosts} = reducer.actions;

export default reducer.reducer;
