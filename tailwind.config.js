const defaultTheme = require('tailwindcss/defaultTheme');  // Menggunakan require di CommonJS
const forms = require('@tailwindcss/forms');  // Menambahkan plugin forms

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './resources/js/**/*.{js,jsx,ts,tsx}', // Memastikan Tailwind dapat memindai file React
    ],

    theme: {
        extend: {
            screens: {
                'xs': '320px', // Tambahkan breakpoint custom untuk 320px
            },
            colors: {
                primary: '#FBFBFB', 
                secondary: '#181C14',  
            },
        },
    },

    plugins: [
        forms,  // Menambahkan plugin forms
        require('daisyui'),  // Menambahkan plugin DaisyUI
    ],

    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    },
};
