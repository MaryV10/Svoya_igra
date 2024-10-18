import { axiosInstance } from '@/shared/lib/axiosInstance';


export class CardService {
  //* Получить все задачи
  static async getAllCards(): Promise<TaskList> {
    try {
      const response = await axiosInstance.get('/topics');
      console.log(response.data, "response")
      return response.data;

    } catch (error) {
      console.error('Error fetching all tasks:', error);
      throw new Error('Failed to fetch tasks.');
    }
  }
}
