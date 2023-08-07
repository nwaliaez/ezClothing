import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials, req) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
                    {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                const user = await res.json();
                // If no error and we have user data, return it
                if (res.ok && user) {
                    // console.log('asd');
                    return user.data;
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
    ],
    callbacks: {
        async redirect({ baseUrl }) {
            return baseUrl;
        },
        async session({ session, user, token }) {
            session.user.id = token.id;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    },
    pages: {
        signIn: '/auth/login',
    },
};
