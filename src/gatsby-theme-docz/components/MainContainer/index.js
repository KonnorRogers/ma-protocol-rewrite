/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react";
import { MainContainer as OriginalContainer } from "gatsby-theme-docz/src/components/MainContainer/index.js"
import Title from "../../../components/title.js"

export const MainContainer = ({children, ...rest}) => {
  return (
    <OriginalContainer {...rest}>
      <Title data-testid="page-title" />
      {children}
    </OriginalContainer>
  )
}

