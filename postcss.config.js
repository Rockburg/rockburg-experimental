module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 3
    }),
    require("tailwindcss")({
      theme: {
        container: {
          center: true
        },
        borderRadius: {
          large: "20px"
        },
        fontFamily: {
          sans: [
            "sofia-pro-soft",
            "-apple-system",
            "BlinkMacSystemFont",
            "Arial",
            "sans-serif"
          ]
        },
        extend: {
          colors: {
            bluegray: "#cbe5ec",
            skyblue: "#e5f4f8",
            blue: "#6bdbff",
            green: "#4ecd84"
          }
        }
      }
    }),
    require("autoprefixer")
  ]
};
