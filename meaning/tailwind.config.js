module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        pink: "15px 15px 10px -1px rgba(255, 192, 203, 0.5), 0 2px 4px -1px rgba(255, 192, 203, 0.06)",
      },
      width: {
        120: "30rem", // Example for a width larger than w-96
      },
    },
  },
  plugins: [],
};
