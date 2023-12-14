'use server'

import { z } from 'zod'

const userSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthdate: z.date(),
    email: z.string(),
    phoneNumber: z.string().optional()
})

export async function createNewUser(formData: FormData){

    const newUser = {
        firstName: formData.get('first_name'),
        lastName: formData.get('last_name'),
        birthdate: new Date(formData.get('birth_date') as string),
        email: formData.get('email'),
        phoneNumber: formData.get('phone_number')
    }


    // validation
    console.log(userSchema.parse(newUser))

}