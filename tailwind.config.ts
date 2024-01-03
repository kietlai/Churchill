import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-background': "url('/public/blueBG.png')",
        'gray-wave-bg': "url('/public/grayWaveBG.png')",
        'white-wave-bg': "url('/public/whiteWaveBG.png')",
        'gradient-bg': "url('/public/gradientBG.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
