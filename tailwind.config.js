module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
   extend: {
  animation: {
    "float-slow": "float 18s ease-in-out infinite",
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-60px)" },
    },
  },
},

  },
  plugins: [],
}