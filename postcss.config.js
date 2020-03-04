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
            blue: {
              default: "#6bdbff",
              darker: "#60C4E5",
              darkest: "#35A5CA"
            },
            green: "#4ecd84"
          },
          borderRadius: {
            large: "20px"
          }
        }
      }
    }),
    require("autoprefixer")
  ]
};
