/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
      },
      height: {
        104: "432px",
      },
      width: {
        70: "300px",
      },
      borderRadius: {
        xmd: "4px",
      },
      gap: {
        0.5: "2px",
      },
    },
  },
  plugins: [],
};
