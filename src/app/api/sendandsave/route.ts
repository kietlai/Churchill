import EmailBody from '@/app/components/Email/BodyEmail';
import { NextRequest, NextResponse } from 'next/server';
import {Resend} from 'resend'

import EmailTemplate from '@/app/components/EmailTemplate';

export async function POST(req: NextRequest){

    const resend = new Resend(process.env.RESEND_KEY)

    const body = await req.json()


    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [body.email],
        subject: `You're all Set! ${body.firstName}`,
        react: EmailBody()
    });
    
    if (error) {
        return NextResponse.json(error)
    }
    
    return NextResponse.json(data)

    
}