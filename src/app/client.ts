// supabase
import { createClient } from '@supabase/supabase-js'

const client = createClient('https://hfzmknwnkgiibhmyvbwo.supabase.co',process.env.SUPABASE_KEY as string)

export default client;