const themeUI = jest.genMockFromModule("theme-ui")

let color = "dark"

function setColorMode(mode) {
  color = mode
}

function useColorMode() {
  return [color, setColorMode]
}

themeUI.setColorMode = setColorMode
themeUI.useColorMode = useColorMode
module.exports = themeUI
