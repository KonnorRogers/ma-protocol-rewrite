import Screen from "../../../utils/screen"
import { css } from "@emotion/core"
import * as colors from "../colors"

export const wrapper = css`
  border: 2px solid ${colors.peach};
  border-radius: 8px;
  padding-top: 3rem;
  width: 100%;

  div {
    border-color: ${colors.peach};
  }
`

export const table = css`
  min-width: auto;

  div {
    font-size: 0.5rem;

    ${Screen.extraSmall} {
      font-size: 0.6rem;
    }

    ${Screen.small} {
      font-size: 0.85rem;
    }
  }

  .header {
    text-align: center;
    font-size: 0.75rem;

    ${Screen.small} {
      font-size: 0.95rem;
    }
  }

  // first item of every table is 3x as large
  & > div > div:first-of-type {
    flex-grow: 3;
  }
`

export const square = color => css`
  .square {
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
  }
`

export const additionalVitals = css`
  display: flex;
  font-size: 0.65rem;

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
  border: 2px solid ${colors.peach};
  height: 2rem;
  max-width: 10rem;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 0.5rem;
  font-size: 0.75rem;

  ${Screen.small} {
    font-size: 0.85rem;
  }
`
