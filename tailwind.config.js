/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#525DA9",

          secondary: "#FFBD00",

          accent: "#5956bf",

          neutral: "#171523",

          "base-100": "#F5F4F5",

          info: "#7FA6D7",

          success: "#2EE5C4",

          warning: "#EFCC6C",

          error: "#E66251",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
