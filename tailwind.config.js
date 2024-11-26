/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FAF7F0",
          secondary: "#181C14",
          hyperlink: "#48CFCB",
        },
      },
    },
    plugins: [
      require('daisyui'),
    ],
  }