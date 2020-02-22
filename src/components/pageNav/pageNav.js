import React from "react"
import PrevPage from "../prevPage/prevPage.js"
import NextPage from "../nextPage/nextPage.js"
import { useCurrentDoc, useDocs } from "docz"

import * as styles from "./styles.js"

const PageNav = ({ ...props }) => {
  const currentDoc = useCurrentDoc()
  const allDocs = useDocs()

  // Way to fix about being at the end, temporary fix
  const about = allDocs.pop()
  allDocs.unshift(about)

  function getCurrentDocIndex() {
    const currentDocIndex = doc => doc.id === currentDoc.id

    return allDocs.findIndex(currentDocIndex)
  }

  function getPrevDoc() {
    const prevDoc = allDocs[getCurrentDocIndex() - 1]

    if (!prevDoc) {
      return [null, null]
    }

    return [prevDoc.route, prevDoc.name]
  }

  function getNextDoc() {
    const nextDoc = allDocs[getCurrentDocIndex() + 1]

    if (!nextDoc) {
      return [null, null]
    }

    return [nextDoc.route, nextDoc.name]
  }

  const [prevTo, prevText] = getPrevDoc()
  const [nextTo, nextText] = getNextDoc()

  return (
    <div css={styles.nav} {...props}>
      <PrevPage to={prevTo} text={prevText} />
      <NextPage to={nextTo} text={nextText} />
    </div>
  )
}

export default PageNav
