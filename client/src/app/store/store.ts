import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/entities/user';
import { gameSlice } from '@/entities/game';


export const store = configureStore({
  reducer: {
    
    user: userSlice,
    game: gameSlice,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
