import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/entities/user';

import { gameSlice } from '@/entities/game';

import { topicSlice } from '@/entities/topic';



export const store = configureStore({
  reducer: {
    
    user: userSlice,

    game: gameSlice,

    topic: topicSlice

    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
