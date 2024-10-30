import { SignInType, SignUpType } from "@/utils/type";
import { post } from ".";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

// async function createUser(params: SignUpType) {
//   const url = '/users';
//   return post({ url, params });
// }

// async function userLogin(params: SignInType) {
//   const url = '/users/authenticate';
//   return post({ url, params });
// }

const UserApi = {
  // createUser,
  // userLogin,
};

export default UserApi;
