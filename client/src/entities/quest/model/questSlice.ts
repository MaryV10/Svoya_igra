import { createSlice } from "@reduxjs/toolkit";
import { Quest, QuestList } from ".";
import { createQuest, getAllQuests } from "../api/questThunks";


type QuestSliceType = {
    quest: Quest | null
    quests: QuestList
    error: string | null
    loading: boolean
}


const initialState: QuestSliceType = {
    quest: null,
    quests: [],
    error: null,
    loading: false
}

const questSlice = createSlice({
    name: 'quest',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllQuests.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllQuests.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Error to get quests";
        })
        .addCase(getAllQuests.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.quests = action.payload;
        })
        .addCase(createQuest.pending, (state) => {
            state.loading = true;
        })
        .addCase(createQuest.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Error to get quests";
        })
        .addCase(createQuest.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.quests = action.payload;
        })

    }
})

export default questSlice.reducer