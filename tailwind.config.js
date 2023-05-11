/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage:{
                'profile':'url(/assets/img/perfil.webp)',
                'proyecto-1':'url(/assets/img/proyecto-1.jpg)',
            }
        },
    },
    plugins: [],
}