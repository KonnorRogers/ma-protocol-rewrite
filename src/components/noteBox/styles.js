import { css } from "@emotion/core"
import Screen from "../../utils/screen"

export const flex = css`
  width: auto;
  text-align: center;
  box-shadow: none;
  border: none;
  position: relative;
  a {
    width: 100%;
  }

  ${Screen.large} {
    margin-top: 4rem;
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    & > div {
      width: 47%;
      margin: 0;
      padding: 1rem;
    }
  }
`
