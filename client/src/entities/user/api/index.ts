import { axiosInstance, setAccessToken } from 'shared/api/axiosInstance';
import { User } from '../model';


export class UserService {

   //  ============== GET USER ===============

    static async refreshAccessToken(): Promise<{
      accessToken: string;
      user: User;
    }> {
      const response = await axiosInstance.get('/tokens/refresh');
      setAccessToken(response.data.accessToken);
      return response.data;
    }

  //  ============== SIGn IN ===============

  static async signIn(
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: User }> {
    const response = await axiosInstance.post('/auth/signin', {
      email,
      password,
    });

    setAccessToken(response.data.accessToken);

    return response.data;
  }

  //  ============== SIGN UP ===============

   static async signUp(
    username: string,
    email: string,
    password: string
  ): Promise<{ accessToken: string; user: User }> {
    const response = await axiosInstance.post('/auth/signup', {
      username,
      email,
      password,
    });

    setAccessToken(response.data.accessToken);

    return response.data;
  }

//  ============== LOGOUT ===============

   static async logout(): Promise<void> {
    await axiosInstance.get('/auth/logout');
    setAccessToken('');
  }
}