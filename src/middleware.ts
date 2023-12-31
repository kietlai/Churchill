import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";


export async function middleware(req: NextRequest){

    const res = NextResponse.next()

    const client = createMiddlewareClient({ req, res },{supabaseKey: process.env.SUPABASE_KEY, supabaseUrl: process.env.supabaseUrl})
    await client.auth.getSession();

    return res;
}

