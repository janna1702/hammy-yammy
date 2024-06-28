import { hamsterService } from "./api";
import { AxiosResponse } from "axios";

import {
  LoginResponse,
  RegisterResponse,
  TapResponse,
  LeaderBorderResponse,
} from "./api-types";

export class AccountingService {
  async login(
    login: string,
    password: string
  ): Promise<AxiosResponse<LoginResponse>> {
    console.log(login, password);

    return await hamsterService.post("api/users/login", {
      login: login,
      password: password,
    });
  }

  async register(
    login: string,
    password: string
  ): Promise<AxiosResponse<RegisterResponse>> {
    return await hamsterService.post("api/users/register", {
      login: login,
      password: password,
      passwordConfirmation: password,
    });
  }

  async tap(token: string): Promise<AxiosResponse<TapResponse>> {
    return await hamsterService.post("api/users/tap", {
      token: token,
    });
  }

  async leaderBoard(): Promise<AxiosResponse<LeaderBorderResponse>> {
    return await hamsterService.get("api/users/leaderboard", {});
  }
}

export const apiService = new AccountingService();
