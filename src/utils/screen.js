const mediaQuery = "@media only screen and (min-width: "

// Creates a media query of `@media only screen and (min-width: ${size})`
function mediaSize(size) {
  return mediaQuery.concat(size).concat(")")
}

export const breakpoints = {
  extraSmall: "400px",
  small: "640px",
  medium: "768px",
  large: "1024px",
  extraLarge: "1280px",
}

const screens = {
  extraSmall: mediaSize(breakpoints.extraSmall),
  small: mediaSize(breakpoints.small),
  medium: mediaSize(breakpoints.medium),
  large: mediaSize(breakpoints.large),
  extraLarge: mediaSize(breakpoints.extraLarge),
}

export default (function Screen() {
  return screens
})()
