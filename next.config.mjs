import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeShiki from '@shikijs/rehype'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    
    env: {
        SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmem1rbndua2dpaWJobXl2YndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0MDUwNzMsImV4cCI6MjAxMDk4MTA3M30.6_eoW8G7-u1SE5quoXuIa68mfh8dsEpDkv_H2rthMd4',
        supabaseUrl: 'https://hfzmknwnkgiibhmyvbwo.supabase.co',
        RESEND_KEY: 're_c9dxhfXi_EXjryRfMxxG9nvCfSHnHahmq'
    },

    images: {
        remotePatterns: [
            /* Adds in links for all of our images */
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
const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
        rehypePlugins: [
            rehypeStringify, 
            [
                rehypeShiki, { 
                    theme: 'one-dark-pro' //one-dark-pro
                }
            ]
        ],
    },
})

export default withMDX(nextConfig)


