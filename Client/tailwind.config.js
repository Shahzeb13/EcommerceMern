// tailwind.config.js
import forms from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // adjust if you use React/Vue/etc.
  ],
  theme: {
    extend: {},
  },
  plugins: [forms],
}
