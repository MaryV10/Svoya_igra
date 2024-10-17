import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import { userSlice } from '@/entities/user';
import { taskSlice } from '@/entities/task';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    tasks: taskSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
