/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "12px",
        xs: "14px",
      },
      height: {
        104: "444px",
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
      backgroundColor: {
        "red-bug": "#EE4B2B",
        "green-dashboard": "#00FF00",
        "babyblue-db": "#89CFF0",
        "orange-feature": "#FFA500",
        "black-form": "#000000",
        "gray-manager": "#E5E4E2",
        "violet-ui": "#7F00FF",
      },
    },
  },
  plugins: [],
};
