/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Title from "../../../components/title.js"
import { MainContainer as OriginalMainContainer } from 'gatsby-theme-docz/src/components/MainContainer/index.js'

export const MainContainer = props => {
  return (
    <div>
      <Title title={document.title}
      <OriginalMainContainer {...props} />
    </div>
  )
}


