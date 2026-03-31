import GoogleProvider from "next-auth/providers/google";
import { prisma } from "./db";
import { generateUsername } from "./generateUsername";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      // Check if user exists
      let existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      // Create if not exists
      if (!existingUser) {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            username: generateUsername(user.name),
          },
        });
      }

      return true;
    },

    async session({ session }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      session.user.id = dbUser.id;
      session.user.username = dbUser.username;

      return session;
    },
  },
};