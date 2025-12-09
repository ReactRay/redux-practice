import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchPosts } from '../../api/postApi.js'

export const fetchPostsThunk = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchPosts()
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
