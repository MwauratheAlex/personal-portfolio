
module.exports = {
  content: ["../*.html", "./**/*.templ", "./**/*.go",],
  safelist: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      screens: {
        sm: "640px",     // breakpoint for small screens
        md: "768px",     // breakpoint for medium screens
        lg: "1024px",    // breakpoint for large screens
        xl: "1280px",    // breakpoint for extra large screens
        "2xl": "1400px"  // breakpoint for double extra large screens
      },
    },
  },
  extend: {},
};

