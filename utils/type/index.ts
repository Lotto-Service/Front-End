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
