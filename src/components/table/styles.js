import { jsx, css } from "@emotion/core"

function toColor(colormode) {
  return colormode === "dark" ? "white" : "black"
}

export const table = ({ colorMode, minWidth }) => {
  minWidth = minWidth || "400px"
  const color = toColor(colorMode)
  return css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid ${color};
    min-width: ${minWidth};
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

    div:last-of-type {
      border-bottom: none;
    }
  `
}

export const item = ({ colspan, tableColumns, align, colorMode }) => {
  const columnWidth = (100 / tableColumns) * colspan
  const color = toColor(colorMode)

  return css`
    width: ${columnWidth}%;
    border-right: 1 px solid ${color};
    padding: 0.5rem;
    text-align: ${align};

    div:last-of-type {
      border: none;
    }
  `
}

export const tableCell = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
