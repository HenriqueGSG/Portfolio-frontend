/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "files-color": "#252526",
        "main-bg": "#1e1e1e",
        "main-nav": "#323233",
        "main-sidebar": "#333333",
        "main-hover-link": "#37373d",
        "vs-code-1": "#1e89d2",
        "vs-code-2": "#43acf2",
        "vs-code-nav-files-top": "#2d2d2d",
        "vs-code-text-orange": "#ce9178",
        "vs-code-text-blue": "#8cdcfe",
        "vs-code-text-blue-darker": "#569cd6",
        "vs-code-text-pink": "#c586c0",
        "vs-code-text-yellow": "#dcdcaa",
        "vs-code-text-yellow-darker": "#ffd710",
        "vs-code-text-green": "#488e50",
        "gradient-1": "#870000",
        "gradient-2": "#190A05",
      },
    },
  },
  plugins: [],
};
