import { css } from "@emotion/core"
import Screen from "../../../utils/screen"
import * as colors from "../colors"

export const border = css`
  border: 2px solid ${colors.peach};
  border-radius: 8px;
`

const nth = num => {
  return `& > div:nth-of-type(${num}):after`
}

export const addHeaders = css`
  & > div:after {
    font-size: 0.65rem;
    content: "Hi";
    position: absolute;
    top: -2rem;

    ${Screen.small} {
      font-size: 1rem;
    }
  }

  ${nth(1)} {
    content: "Yes";
  }

  ${nth(2)} {
    content: "No";
  }

  ${nth(3)} {
    margin-left: -0.75rem;
    content: "Unknown";
  }
`

export const criteriaBox = css`
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
