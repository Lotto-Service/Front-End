import NextAuth from 'next-auth/next';
import { JWT } from 'next-auth/jwt';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User & DefaultSession['user'];
    expires: string;
    accessToken: string;
    accessTokenExpires?: number;
    refreshToken?: string;
    refreshTokenExpires?: number;
    error?: 'RefreshAccessTokenError';
  }

  interface User {
    id?: string;
    name?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    data: {
      accessToken: string;
      refreshToken: string;
    };

    expires: number;
    exp: number;
    error?: 'RefreshAccessTokenError';
  }
}
