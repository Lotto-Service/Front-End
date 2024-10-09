import axios from 'axios';
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import UserApi from '../../User/UserApi';

const { userLogin } = UserApi;

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      type: 'credentials',
      credentials: {
        username: { type: 'username' },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        console.log('계정 정보 ', credentials?.username, credentials?.password);
        try {
          const params = {
            username: credentials?.username || '',
            password: credentials?.password,
          };
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/users/authenticate`,
            params,
          );
          return res.data;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log('error ', error.response?.data);

            const message = Object.values(error.response?.data)[0] as string;
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

      console.log('session ==>> ', session);
      console.log('token ==> ', token);
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
    strategy: 'jwt',
    maxAge: 5 * 60 * 60 * 30,
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
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
