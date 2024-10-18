import { createSlice } from "@reduxjs/toolkit";
import { Game, Games } from ".";

import {
  createGame,
  getGame,
  updateScoreGame,
  updateStatusGame,
} from "../api/gameThunks";

type GameSliceType = {
  game: Game | null;
  error: string | null;
  loading: boolean;
  games: Games | [];
};

const initialState: GameSliceType = {
  games: [],
  game: null,
  error: null,
  loading: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGame.rejected, (state, action) => {
        state.error = action.error.message || "Error to get game";
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.game = action.payload;
      })

      //!----------------------- CREATE
      .addCase(createGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(createGame.rejected, (state, action) => {
        state.error = action.error.message || "Error to get tasks";
      })
      .addCase(createGame.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.game = action.payload;
      })
      //!----------------------- UPD STATUS
      .addCase(updateStatusGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStatusGame.rejected, (state, action) => {
        state.error = action.error.message || "Error to get tasks";
      })
      .addCase(updateStatusGame.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.game = action.payload;
        // state.tasks = state.tasks.map((task) =>
        //   task.id === action.payload.id ? action.payload : task
        // );
      })

      //!----------------------- UPD SCORE
      .addCase(updateScoreGame.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateScoreGame.rejected, (state, action) => {
        state.error = action.error.message || "Error to get tasks";
      })
      .addCase(updateScoreGame.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.game = action.payload;
        // state.tasks = state.tasks.map((task) =>
        //   task.id === action.payload.id ? action.payload : task
        // );
      });
  },
});

export default gameSlice.reducer;
