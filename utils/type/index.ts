export interface SignUpType {
  username: string;
  password: string;
  checkPw?: string;
  email: string;
  birth: string;
  phoneNumber: string;
}

export interface SignInType {
  username: string;
  password: string;
}

export interface CommonApiType {
  url?: string;
  params?: object;
  body?: object;
  headers?: object;
  token?: string;
}

export interface RoundsType {
  size?: number;
  page?: number;
  token: string;
}

export interface RoundStore {
  round: number;
  setRound: (newRound: number) => void;
  selectedRound: number;
  setSelectedRound: (newRound: number) => void;
}
