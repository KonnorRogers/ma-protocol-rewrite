const mediaQuery = "@media only screen and (min-width: "

// Creates a media query of `@media only screen and (min-width: ${size})`
function mediaSize(size) {
  return mediaQuery.concat(size).concat(")")
}

const screens = {
  extraSmall: mediaSize("450px"),
  small: mediaSize("640px"),
  medium: mediaSize("768px"),
  large: mediaSize("1024px"),
  extraLarge: mediaSize("1280px"),
}

export default (function Screen() {
  return screens
})()
