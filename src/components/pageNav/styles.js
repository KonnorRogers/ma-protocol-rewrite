import { css } from "@emotion/core"
import Screen from "../../utils/screen.js"

export const nav = css`
  display: flex;
  width: 100%;
  margin-top: 2rem;

  * {
    width: 50%;
    padding: 0.25rem;
    margin: auto;
  }

  .prev-text,
  .next-text {
    display: none;
  }

  ${Screen.small} {
    .next-word,
    .prev-word {
      display: none;
    }

    .prev-text,
    .next-text {
      display: inline;
    }
  }
`
