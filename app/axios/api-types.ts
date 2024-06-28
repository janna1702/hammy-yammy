export type LoginResponse = {
  login: string;
  password: string;
  token: string;
};
export type RegisterResponse = {
  login: string;
  password: string;
  passwordConfirmation: string;
  token: string;
};
export type TapResponse = {
  token: string;
  newHamsters: number;
};
export type LeaderBorderResponse = {
  rows: [
    {
      login: string;
      hamsters: number;
    }
  ];
};
