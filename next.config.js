/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmem1rbndua2dpaWJobXl2YndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0MDUwNzMsImV4cCI6MjAxMDk4MTA3M30.6_eoW8G7-u1SE5quoXuIa68mfh8dsEpDkv_H2rthMd4',
        supabaseUrl: 'https://hfzmknwnkgiibhmyvbwo.supabase.co'
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
              port: ''
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ]
    },
    
    async redirects() {
        return [
            {
                source: '/careers/view/:id',
                destination: '/careers/view/:id/apply',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig


