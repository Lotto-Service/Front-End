import axios from "axios";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        username: { type: "username" },
        password: { type: "password" },
        checkPw: { type: "checkPw" },
        email: { type: "email" },
        birth: { type: "birth" },
        phoneNumber: { type: "phoneNumber" },
      },
      async authorize(credentials, req) {
        try {
          const params = {
            username: credentials?.username,
            password: credentials?.password,
            checkPw: credentials?.checkPw,
            email: credentials?.email,
            birth: credentials?.birth,
            phoneNumber: credentials?.phoneNumber,
          };
          // 회원가입
          if (params.email) {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/users`,
              params
            );
            return res.data;
          }
          // 로그인
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/users/authenticate`,
            params
          );
          return res.data;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const message = Object.values(error.response?.data)[1] as string;
            throw new Error(message);
          }
        }
      },
    }),
  ],

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.error) {
        session.error = token.error;
        return session;
      }

      // console.log("session ==>> ", session);
      // console.log("token ==> ", token);
      session.accessToken = token.data?.accessToken;
      session.refreshToken = token.data?.refreshToken;
      session.accessTokenExpires = token.expires;

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account && user) {
        return {
          ...token,
          ...user,
        };
      }
      const nowTime = Math.round(Date.now() / 1000);
      const shouldRefreshTime = (token.accessTokenExpire as number) - nowTime;

      if (shouldRefreshTime > 0) {
        return token;
      }

      // refresh 토큰 설정 시
      // try {
      //   const res = await axios.post('',{
      //     refresh: token.refreshToken
      //   })

      //   return {
      //     ...token,
      //     accessToken: res.data.accessToken,
      //     accessTokenExpires: res.data.accessTokenExpires
      //   }
      // }catch(error){
      //   return {
      //     ...token,
      //     error: 'RefreshAccessTokenError'
      //   }
      // }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 60 * 60 * 24, // 30일
    // maxAge: 20,
    updateAge: 24 * 60 * 60,
  },
  events: {
    // 사용자가 로그인 했을 때
    async signIn(message) {},
    // 사용자가 로그아웃 했을 때
    async signOut(message) {},
    async createUser(message) {},
    async updateUser(message) {},
    async linkAccount(message) {},
    async session(message) {},
  },
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
