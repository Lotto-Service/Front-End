import axios from 'axios';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('들어옴 ===>> ');
        if (!credentials) return null;
        const { username, password } = credentials;
        console.log('들어오는 데이터 ', username, password);
        try {
          const response = await axios.post(`${process.env.NEXTAUTH_URL}/users/authenticate`, {
            username,
            password,
          });

          const data = response.data;

          if (data) {
            return {
              id: data.id,
              name: data.name,
              email: data.email,
              token: data.token,
            };
          }
        } catch (err) {
          console.error('Authentication error:', err);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session }) {
      return session;
    },
  },
});

export { handler as GET, handler as POST };
