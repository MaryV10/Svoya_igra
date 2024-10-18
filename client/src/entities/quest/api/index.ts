import { axiosInstance } from "@/shared/lib/axiosInstance";


export class QuestService {

    static async getAllQuests() {
        try {
            const response = await axiosInstance.get('/quests');
            return response.data;
        } catch (error) {
            console.error('Error fetching all topics:', error);
      throw new Error('Failed to fetch topics.');
        }
    }

    static async createQuest(gameId: number, cardId: number) {
        try {
            const response = await axiosInstance.post('/quests', {
                gameId,
                cardId
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching all topics:', error);
            throw new Error('Failed to fetch topics.');  
        }
    }
}