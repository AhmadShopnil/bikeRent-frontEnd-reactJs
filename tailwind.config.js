// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React-specific content path
    "./node_modules/preline/dist/*.js", // Preline content path
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./node_modules/preline/dist/*.js",
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     // require('@tailwindcss/forms'),
//     // require("preline/plugin"),
//   ],
// };
