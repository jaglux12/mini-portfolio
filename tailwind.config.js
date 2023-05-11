/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage:{
                'profile':'url(/assets/img/perfil.png)',
                'proyecto-1':'url(/assets/img/proyecto-1.jpg)',
            },
            colors:{
                'gray-oscuro':'#12131E',
                'gray-claro-text':'#cacaca'
            }
        },
    },
    plugins: [],
}