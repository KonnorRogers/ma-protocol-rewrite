const mediaQuery = "@media only screen and (min-width: "

function insertSize(size) {
  return mediaQuery.concat(size).concat(")")
}

const screens = {
  small: insertSize("640px"),
  medium: insertSize("768px"),
  large: insertSize("1024px"),
  extraLarge: insertSize("1280px"),
}

export default (function Screen() {
  return screens
})()
