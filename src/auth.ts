import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {
  InactiveAccountError,
  InvalidEmailPasswordError,
} from "./utils/errors";
import { sendRequest } from "./utils/api";
import { IUser } from "./types/next-auth";
import router from "next/router";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        // console.log("Credentials received:", credentials);
        let user = null;
        const res = await sendRequest<IBackendRes<ILogin>>({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
          body: {
            username: credentials.username,
            password: credentials.password,
          },
        });


        // console.log(res)

        if (+res.statusCode === 201) {
          // console.log(res.data)
          return {
            
            _id: res.data?.user?._id,
            name: res.data?.user?.name,
            email: res.data?.user?.email,
            access_token: res.data?.access_token,
            role:res.data?.user.role,
            
          };
        } else if (+res.statusCode === 401) {
          throw new InvalidEmailPasswordError();
        } else if (+res.statusCode === 400) {
          throw new InactiveAccountError();
        } else {
          throw new Error("Internal server error 123");
        }
        
       }
    }),
  ],
  pages: {
    
    signIn: "/auth/login",
  },
  //  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.user = user as IUser;
      }
      return token;
    },
    session({ session, token }) {
      console.log("Session updated: ", session);
      (session.user as IUser) = token.user;
      
      return session;
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
