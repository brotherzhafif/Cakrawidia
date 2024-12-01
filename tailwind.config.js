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
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],  // Menambahkan font custom
            },
        },
    },

    plugins: [
        forms,  // Menambahkan plugin forms
        require('daisyui'),  // Menambahkan plugin DaisyUI
    ],
};
