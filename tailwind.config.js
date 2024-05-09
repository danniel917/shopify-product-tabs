import remToPxPlugin from 'tailwindcss-rem-to-px';

/** @type {import('tailwindcss').Config} */
export default {
    // Use prefix tw- to avoid conflicts with other Dawn styles
    prefix: 'tw-',
    content: [
        "./*/*.{js,json,liquid}", // Warn, only one level deep folders
    ],
    theme: {
        extend: {},
    },
    plugins: [
        remToPxPlugin({
            baseFontSize: 16,
        })
    ],
}