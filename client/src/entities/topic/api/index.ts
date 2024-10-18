import { axiosInstance } from "@/shared/lib/axiosInstance";
import { TopicList } from "../model";


export class TopicService {

    static async getAllTopics(): Promise<TopicList> {
        try {
         const response = await axiosInstance.get('/topics');
         console.log(response, "responseeeee")
    return response.data;   
        } catch (error) {
            console.error('Error fetching all topics:', error);
      throw new Error('Failed to fetch topics.');
        }
    
    }
}