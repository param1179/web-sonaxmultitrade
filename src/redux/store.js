import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import { commonSlice } from './slices'

const combinedReducer = combineReducers({
  commonStore: commonSlice,
})

const rootReducer = (state, action) => {
  if (action.type === 'common/logout') state = undefined
  return combinedReducer(state, action)
}

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
  devTools: true,
})
