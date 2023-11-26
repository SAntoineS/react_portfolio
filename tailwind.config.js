/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                body: ['Montserrat']
            },
            objectPosition: {
                'top-md': 'center -200px', // Ajoutez cette ligne
            },
        },
    },
    plugins: [],
}

