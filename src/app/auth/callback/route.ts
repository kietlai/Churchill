import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

async function GET(req: NextRequest){
    const reqUrl = new URL(req.url)
    const code =  reqUrl.searchParams.get('code')

    if(code){
        
        const client = createRouteHandlerClient({ cookies }) 
        await client.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(`${reqUrl.origin}`)
}