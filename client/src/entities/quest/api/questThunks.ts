import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { QuestList } from '../model';
import { QuestService } from '.';
import { AxiosError } from 'axios';

enum QUEST_THUNK_ACTIONS {
    GET_ALL_QUESTS = 'quests/getAllQuests',
    CREATE_QUEST = 'quests/createQuest'
}

type RejectValue = {
    message: string;
  };

export const getAllQuests = createAsyncThunk<
QuestList,
void,
{ rejectValue: RejectValue }>
(QUEST_THUNK_ACTIONS.GET_ALL_QUESTS, async (_, { rejectWithValue }) => {
    try {
        const quests = await QuestService.getAllQuests();
        return quests
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return rejectWithValue({ message: err.message });
    }
});

export const createQuest = createAsyncThunk<
QuestList,
{ gameId: number, cardId: number },
{ rejectValue: RejectValue }>
(QUEST_THUNK_ACTIONS.CREATE_QUEST, async ({ gameId, cardId }, { rejectWithValue }) => {
    try {
        const quest = await QuestService.createQuest(gameId, cardId);
        return quest
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return rejectWithValue({ message: err.message });
    }
})