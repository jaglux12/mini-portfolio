/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage:{
                'profile':'url(/assets/img/perfil.png)',
                'proyecto-1':'url(/assets/img/proyecto-1.png)',
                'proyecto-2':'url(/assets/img/proyecto-2.png)',
                'proyecto-3':'url(/assets/img/proyecto-3.png)',
                'proyecto-4':'url(/assets/img/proyecto-4.png)',
                'proyecto-5':'url(/assets/img/proyecto-5.png)'
            },
            colors:{
                'gray-oscuro':'#12131E',
                'gray-claro-text':'#cacaca'
            }
        },
    },
    plugins: [],
}