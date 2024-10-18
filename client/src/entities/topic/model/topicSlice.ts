import { createSlice } from '@reduxjs/toolkit';
import { Topic, TopicList } from '.';
import { getAllTopics } from '../api/topicThunks';

type TopicSliceType = {
    topic: Topic | null;
    topics: TopicList;
    error: string | null;
    loading: boolean;
};

const initialState: TopicSliceType = {
    topic: null,
    topics: [],
    error: null,
    loading: false,
};

const topicSlice = createSlice({
    name: "topic",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllTopics.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllTopics.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Error to get topics";
        })
        .addCase(getAllTopics.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.topics = action.payload;
        })
    }
})

export default topicSlice.reducer