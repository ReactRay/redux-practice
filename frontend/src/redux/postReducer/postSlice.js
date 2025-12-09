import { createSlice } from '@reduxjs/toolkit'
import { fetchPostsThunk } from './postThunks'
const initialState = {
  posts: [],
}

const postSlice = createSlice({
  name: 'post',

  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchPostsThunk.fulfilled, (state, { payload }) => {
      state.posts = payload
    })
  },
})

export default postSlice.reducer
