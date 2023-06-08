/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:'class',
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage:{
                'profile':'url(https://i.postimg.cc/sg1XqV7q/perfil.png)',
                'proyecto-1':'url(https://i.postimg.cc/MGCv1hc4/proyecto-1.png)',
                'proyecto-2':'url(https://i.postimg.cc/MHxHFVmm/proyecto-2.png)',
                'proyecto-3':'url(https://i.postimg.cc/J7cGBYR6/proyecto-3.png)',
                'proyecto-4':'url(https://i.postimg.cc/7Zc6ypN6/proyecto-4.png)',
                'proyecto-5':'url(https://i.postimg.cc/J0q0V0TV/proyecto-5.png)'
            },
            colors:{
                'gray-oscuro':'#12131E',
                'gray-claro-text':'#cacaca'
            },
            screens: {
                '3xl':'1680px',
                '4xl':'1850px',
                '5xl':'1920px'
            }
        },
        
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [],
      },

}