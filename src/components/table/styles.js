import { css } from "@emotion/core"

function toColor(colormode) {
  return colormode === "dark" ? "white" : "black"
}

export const table = ({ colorMode, minWidth }) => {
  minWidth = minWidth || "500px"
  const color = toColor(colorMode)
  return css`
    padding: 0;
    display: flex;
    margin: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid ${color};
    min-width: ${minWidth};
    flex: 1 1 auto;

    & > div:last-of-type {
      border-bottom: none;
    }
  `
}
export const row = ({ heading, colorMode }) => {
  const color = toColor(colorMode)

  const fontSize = heading ? "1.15rem" : "initial"
  const fontWeight = heading ? "bold" : "normal"

  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    display: flex;
    justify-content: flex-start;
    text-align: center;
    width: 100%;
    align-items: stretch;
    border-bottom: 1px solid ${color};
    flex: 1 0 0;

    & > div:last-of-type {
      border-right: none;
    }

    div:last-of-type:after {
      content: "";
      display: block;
      position: absolute;
      right: -2rem;
      width: 2rem;
      height: 1px;
    }
  `
}

export const item = ({ colspan, align, colorMode }) => {
  const color = toColor(colorMode)

  return css`
    min-width: 0px;
    flex: ${colspan} 0 0;
    border-right: 1px solid ${color};
    padding: 0.5rem;
    text-align: ${align};
    position: relative;
  `
}

export const tableCell = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
