import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "email", type: "text", placeholder: "Email" },
                password: { label: "password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials: any) {
                return {
                    id: "1",
                    name: "Hardcoded Username",
                    email: "hardcoded@gmail.com"
                }                
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET
})


export const GET = handler
export const POST = handler 