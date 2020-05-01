import Screen from "../../../utils/screen"
import { css } from "@emotion/core"
import * as colors from "../colors"

export const wrapper = css`
  border: 2px solid ${colors.peach};
  border-radius: 8px;
  padding-top: 3rem;
  width: 100%;
`

export const criteriaBox = colorMode => {
  let backgroundColor

  if (colorMode === "dark") {
    backgroundColor = "#111111"
  } else {
    backgroundColor = "ghostwhite"
  }

  return css`
    display: flex;
    flex-direction column;
    justify-content: center;
    margin: 1rem;
    padding-top: 1.5rem;
    font-size: 0.75rem;

    & > div {
      justify-content: space-evenly;
      display: flex;
      margin: 0;
      padding: 0.5rem 0;
      align-items: center;
      border: 2px solid ${colors.peach};
      margin-top: -2px;
    }

    & > div:nth-of-type(even) {
      background: ${backgroundColor};
    }

    span {
      width: 50%;
    }

    ${Screen.small} {
      font-size: 1rem;
    }
  `
}

export const headings = css`
  span {
    width: 50%;
    flex: 1 0 75%;
    border: 1px solid black;
  }
  div {
    margin: 0 1.25rem;
    width: 1.25rem;
    flex: 0 0 1.25rem;

    ${Screen.small} {
      margin: 0 1.5rem;
      width: 1.5rem;
      flex-basis: 1.5rem;
    }
  }
`

export const square = color => css`
  height: 1.25rem;
  width: 1.25rem;
  flex: 0 0 1.25rem;
  border: 1.25px solid ${color};
  position: relative;

  ${Screen.small} {
    height: 1.5rem;
    width: 1.5rem;
    flex-basis: 1.5rem;
  }
`

export const additionalVitals = css`
  display: flex;
  font-size: 0.75rem;

  & > div {
    width: 50%;
    text-align: center;
    margin: 1rem;
  }

  ${Screen.small} {
    font-size: 0.95rem;
  }
`

export const entryBox = css`
  border: 1px solid ${colors.peach};
  height: 2rem;
  max-width: 10rem;
  margin: auto;

  & > div {
    justify-content: space-evenly;
    display: flex;
    margin: 0;
    padding: 0.5rem 0;
    align-items: center;
    border: 1px solid ${colors.peach};
    margin-top: -1px;
    margin-bottom: -1px;
  }

  span {
    width: 50%;
  }

  ${Screen.small} {
    font-size: 1rem;
  }
`
