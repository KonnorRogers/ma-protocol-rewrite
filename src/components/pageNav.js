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

const PageNav = () => {
  const currentDoc = useCurrentDoc();
  const allDocs = useDocs();

  function getCurrentDocIndex() {
    const currentDocIndex = doc => doc.id === currentDoc.id

    return allDocs.findIndex(currentDocIndex);
  }

  function getPrevDoc() {
    const prevDoc = allDocs[getCurrentDocIndex() - 1];
    return [prevDoc.route, prevDoc.name];
  }

  function getNextDoc() {
    const nextDoc = allDocs[getCurrentDocIndex() + 1];
    return [nextDoc.route, nextDoc.name];
  }

  const [prevTo, prevText] = getPrevDoc();
  const [nextTo, nextText] = getNextDoc();
  return (
    <div css={navCSS}>
      <PrevPage to={prevTo} text={prevText} />
      <NextPage to={nextTo} text={nextText} />
    </div>
  )
}

export default PageNav
