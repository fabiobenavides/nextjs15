import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

export const authOptions = {
    session: {
        jwt: true,
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = await connectToDatabase();
                const db = client.db();
                const user = await db.collection('users').findOne({ email: credentials.email });
                if (!user) {
                    client.close();
                    throw new Error('No user found!');
                }
                const isValid = await verifyPassword(credentials.password, user.password);
                if (!isValid) {
                    client.close();
                    throw new Error('Could not log you in!');
                }
                client.close();
                return { email: user.email };
            }
        })
    ]
};

export default NextAuth(authOptions);
