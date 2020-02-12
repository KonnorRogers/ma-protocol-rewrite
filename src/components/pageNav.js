import React from "react";
import { css } from "@emotion/core"
import PrevPage from "./prevPage.js"
import NextPage from "./nextPage.js"
import Screen from "../utils/screen.js"
import { useDocs } from 'docz'

const navCSS = css`
  display: flex;
  width: 100%;
  margin-top: 2rem;

  * {
    width: 50%;
    margin: auto;
  }

  .prev-text, .next-text {
    display: none;
  }

  ${Screen.small} {
    .next-word, .prev-word {
      display: none;
    }

    .prev-text, .next-text {
      display: inline;
    }
  }
`

const PageNav = ({nextTo, nextText, prevTo, prevText}) => {
  // const prevTo =
  // const prevText =
  // const nextTo =
  // const nextText =
  return (
    <div css={navCSS}>
      <PrevPage to={prevTo} text={prevText} />
      <NextPage to={nextTo} text={nextText} />
    </div>
  )
}

export default PageNav
