import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './modules/auth/authSlice.jsx';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
