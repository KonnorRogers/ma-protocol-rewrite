import React from "react";
import { css } from "@emotion/core"
import PrevPage from "./prevPage.js"
import NextPage from "./nextPage.js"
import Screen from "../utils/screen.js"
import { useCurrentDoc, useDocs } from 'docz'

const navCSS = css`
  display: flex;
  width: 100%;
  margin-top: 2rem;

  * {
    width: 50%;
    padding: 0.25rem;
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

const PageNav = ({...props}) => {
  const currentDoc = useCurrentDoc();
  const allDocs = useDocs();

  // Way to fix about being at the end, temporary fix
  const about = allDocs.pop()
  allDocs.unshift(about);
  //

  function getCurrentDocIndex() {
    const currentDocIndex = doc => doc.id === currentDoc.id

    return allDocs.findIndex(currentDocIndex);
  }

  function getPrevDoc() {
    const prevDoc = allDocs[getCurrentDocIndex() - 1];

    if (!prevDoc) {
      return [null, null]
    }

    return [prevDoc.route, prevDoc.name];
  }

  function getNextDoc() {
    const nextDoc = allDocs[getCurrentDocIndex() + 1];

    if (!nextDoc) {
      return [null, null]
    }

    return [nextDoc.route, nextDoc.name];
  }

    const [prevTo, prevText] = getPrevDoc();
    const [nextTo, nextText] = getNextDoc();

  return (
    <div css={navCSS} {...props}>
      <PrevPage to={prevTo} text={prevText} />
      <NextPage to={nextTo} text={nextText} />
    </div>
  )
}

export default PageNav
