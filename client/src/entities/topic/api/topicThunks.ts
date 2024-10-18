import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { TopicList } from '../model';
import { AxiosError } from 'axios';
import { TopicService } from '.';

enum TOPIC_THUNK_ACTIONS{
    GET_ALL_TOPICS = 'topics/getAllTopics'
}

type RejectValue = {
    message: string;
  };

  export const getAllTopics = createAsyncThunk<
  TopicList,
  void,
  { rejectValue: RejectValue }>
  (TOPIC_THUNK_ACTIONS.GET_ALL_TOPICS, async (_, {rejectWithValue}) => {
    try {
      const topics =  await TopicService.getAllTopics();
console.log(topics, "+++++++++")
        return topics 
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return rejectWithValue({ message: err.message });  
    }
  })
