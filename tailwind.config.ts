import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#2F73F2',
                secondary: '#102C46',
                darkmode: '#011120',
                darklight: '#0d1a2c',
                darkborder: '#224767',
                SlateBlueText: '#547593',
                IcyBreeze: '#f0f9ff',
                ElectricAqua: '#00C9B1',
                YellowRating: '#FFB800',
                MidnightNavyText: '#1e293b',
            },
        },
    },
    plugins: [],
}

export default config