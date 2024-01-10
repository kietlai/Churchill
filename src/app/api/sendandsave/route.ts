import { NextRequest, NextResponse } from 'next/server';
import {Resend} from 'resend'

export async function POST(req: NextRequest){

    const resend = new Resend(process.env.RESEND_KEY)

    const params = await req.json()


    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['heroemenalom73@gmail.com'],
        subject: `${JSON.stringify(params)}`,
        html: '<strong>test2</strong>',
    });
    
    if (error) {
        return NextResponse.json(error)
    }
    
    return NextResponse.json(data)

    
}