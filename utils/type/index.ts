export interface SignUpForm {
  username: string;
  password: string;
  checkPw: string;
  email: string;
  birth: string;
  phoneNumber?: string;
}

export interface SignInForm {
  username: string;
  password: string;
}
