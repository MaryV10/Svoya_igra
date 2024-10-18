import { axiosInstance } from "@/shared/lib/axiosInstance";
import { Game } from "../model";

export class GameService {
  static async getGame(): Promise<Game> {
    try {
      const response = await axiosInstance.get(`/games`);
      return response.data;
    } catch (error) {
      console.error("Error fetching all tasks:", error);
      throw new Error("Failed to fetch tasks.");
    }
  }

  static async createGame(userId: number): Promise<Game> {
    try {
      const response = await axiosInstance.post("/games", {
        userId,
        isActive: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error);
      throw new Error("Failed to create task.");
    }
  }

  static async updateStatusGame(userId: number): Promise<Game> {
    try {
      const response = await axiosInstance.put(`/games/status/${userId}`, {
        userId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      throw new Error("Failed to update task.");
    }
  }

  static async updateScoreGame(userId: number, score: number): Promise<Game> {
    try {
      const response = await axiosInstance.put(`/games/score/${userId}`, {
        userId,
        score,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating task:", error);
      throw new Error("Failed to update task.");
    }
  }
}
