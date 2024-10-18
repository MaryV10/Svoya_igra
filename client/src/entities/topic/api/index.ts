import { axiosInstance } from "@/shared/lib/axiosInstance";
import { TopicList } from "../model";


export class TopicService {

    static async getAllTopics(): Promise<TopicList> {
        try {
         const response = await axiosInstance.get('/topics');
    return response.data;   
        } catch (error) {
            console.error('Error fetching all topics:', error);
      throw new Error('Failed to fetch topics.');
        }
    
    }
}