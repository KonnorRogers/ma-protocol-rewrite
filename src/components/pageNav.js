import React from "react";
import { css } from "@emotion/core"
import PrevPage from "./prevPage.js"
import NextPage from "./nextPage.js"
import Screen from "../utils/screen.js"

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

const PageNav = ({prevTo, prevText, nextTo, nextText}) => {
  return (
    <div css={navCSS}>
      <PrevPage to={prevTo} text={prevText} />
      <NextPage to={nextTo} text={nextText} />
    </div>
  )
}

export default PageNav

// GRAPHQL QUERY FOR NEXT AND PREVIOUS
// query nextPrevQuery {
//   allDoczEntries {
//     edges {
//       next {
//         name
//         route
//       }
//       previous {
//         name
//         route
//       }
//     }
//   }
// }

