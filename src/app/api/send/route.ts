import EmailBody from '@/app/components/EmailTemplate/BodyEmail';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import {Resend} from 'resend'


export async function POST(req: NextRequest){

    const resend = new Resend(process.env.RESEND_KEY)
    const body = await req.json()

    
    const {data, error} = await resend.emails.send({
        from: 'Churchill <careers@churchill.biz>',
        to: [body.email],
        subject: `You're all Set! ${body.firstName}`,
        react: EmailBody({firstName: body.firstName,lastName: body.lastName, position: body.appliedFor}) as React.ReactElement
    });

    if(data){
        return NextResponse.json(data);
    }

    if(error){
        console.log(error.message)
        return NextResponse.json(error)
    }


}


    
