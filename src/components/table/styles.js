import { jsx, css } from "@emotion/core"

export const table = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
`

export const row = (lastRow, heading) => {
  const borderBottom = lastRow ? "none" : "1px solid black"

  const fontSize = heading ? "1.25rem" : "initial"
  const fontWeight = heading ? "bold" : "normal"

  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    display: flex;
    justify-content: flex-start;
    text-align: center;
    width: 100%;
    align-items: stretch;
    border-bottom: ${borderBottom};
  `
}

export const item = ({ columns, align, lastItem }) => {
  const columnWidth = 100 / columns

  const borderRight = lastItem ? "none" : "1px solid black"

  return css`
    width: ${columnWidth}%;
    border-right: ${borderRight};
    padding: 0.5rem;
    text-align: ${align};
  `
}

export const tableCell = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
