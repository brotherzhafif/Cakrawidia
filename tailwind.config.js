// Menggunakan import di ESM
import defaultTheme from 'tailwindcss/defaultTheme';  // Menggunakan import di ESM
import forms from '@tailwindcss/forms';  // Menambahkan plugin forms
import daisyui from 'daisyui'; // Menggunakan plugin DaisyUI

export default {
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
        daisyui,  // Menambahkan plugin DaisyUI
    ],

    daisyui: {
        themes: false,
    },
};
