// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import  NextAuth from "next-auth";
import Providers from "next-auth/providers";

// eslint-disable-next-line import/no-anonymous-default-export
export default NextAuth({
  
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],

  database: process.env.DATABASE_URL,

})  


