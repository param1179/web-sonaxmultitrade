import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

export const fetchAdminProfile = createAsyncThunk(
  'admin/profile',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('admin/profile')
      if (resp?.status === 200) return resp.data.admin
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)
