import { createAsyncThunk } from "@reduxjs/toolkit";
import { Game } from "../model";
import { GameService } from ".";
import { AxiosError } from "axios";

enum GAME_THUNKS_ACTIONS {
  GET_GAME = "game/getGame",
  CREATE_GAME = "game/createGame",
  UPDATE_STATUS_GAME = "game/updateStatusGame",
  UPDATE_SCORE_GAME = "game/updateScoreGame",
}

type RejectValue = {
  message: string;
};

export const getGame = createAsyncThunk<
Game, 
{ userId: number },
{ rejectValue: RejectValue }
>(
  GAME_THUNKS_ACTIONS.GET_GAME,
  async ({ userId }, { rejectWithValue }) => {
    try {
        return await GameService.getGame(userId);
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return rejectWithValue({ message: err.message });
      }
  }


);

export const createGame = createAsyncThunk<
Game,
{ userId: number, isActive: boolean },
{ rejectValue: RejectValue }
>(
    GAME_THUNKS_ACTIONS.CREATE_GAME, async ({ userId, isActive }, { rejectWithValue }) => {
        try {
            return await GameService.createGame(userId, isActive);
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            return rejectWithValue({ message: err.message });
        }
    }
    
);

export const updateStatusGame = createAsyncThunk<
Game,
  { userId: number, isActive: boolean },
  { rejectValue: RejectValue }
>(
  GAME_THUNKS_ACTIONS.UPDATE_STATUS_GAME,
  async ({ userId, isActive }, { rejectWithValue }) => {
    try {
      return await GameService.updateStatusGame(userId, isActive);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({ message: err.message });
    }
  }
);


export const updateScoreGame = createAsyncThunk<
Game,
  { userId: number, score: number },
  { rejectValue: RejectValue }
>(
  GAME_THUNKS_ACTIONS.UPDATE_STATUS_GAME,
  async ({ userId, score }, { rejectWithValue }) => {
    try {
      return await GameService.updateScoreGame(userId, score);
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      return rejectWithValue({ message: err.message });
    }
  }
);
