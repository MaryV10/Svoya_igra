import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/entities/user';
import { topicSlice } from '@/entities/topic';


export const store = configureStore({
  reducer: {
    
    user: userSlice,
    topic: topicSlice
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
