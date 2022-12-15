import { createSlice } from '@reduxjs/toolkit'
//action
import { fetchAdminProfile } from './action'

const setLoaded = (state) => {
  state.loaded = false
}

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    profile: null,
    loaded: true,
    sidebarShow: true,
  },
  reducers: {
    logout: () => {},
    changeState: (state, action) => {
      state.sidebarShow = action.payload.sidebarShow
      state.sidebarUnfoldable = action.payload.sidebarUnfoldable
    },
  },
  extraReducers: {
    [fetchAdminProfile.pending]: setLoaded,
    [fetchAdminProfile.fulfilled]: (state, action) => {
      state.loaded = true
      state.profile = action.payload
    },
  },
})
export const { logout, changeState } = commonSlice.actions
const { reducer } = commonSlice

export default reducer
