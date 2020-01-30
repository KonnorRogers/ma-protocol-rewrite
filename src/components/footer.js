import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { css } from "@emotion/core"
import Screen from "../utils/screen.js"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const footerCSS = css`
    margin: 0;
    padding: 0.5rem;
    font-size: small;
    text-align: center;
    background: rgba(0, 0, 0, 0.07);

    ${Screen.small} {
      display: flex;
      justify-content: center;
      font-size: medium;
    }

    ${Screen.medium} {
      font-size: large;
      padding: 0.25rem;
    }
  `

  const gatsbySpanCSS = css`
    padding: 0 0.25rem;
    margin: 0 0.25rem;
    color: var(--gatsby-purple);

    &:hover {
      background: var(--gatsby-purple);
      color: white;
    }
  `

  const authorCSS = css`
    display: block;
    ${Screen.small} {
      &::before {
        content: " | ";
        margin: 1px;
        padding: 1px;
      }
    }
  `

  return (
    <>
      <footer css={footerCSS}>
        © {new Date().getFullYear()}
        &nbsp; | &nbsp; Built with
        <a href="https://www.gatsbyjs.org" css={gatsbySpanCSS}>
          Gatsby
        </a>
        <span css={authorCSS}>
          Created and maintained by {data.site.siteMetadata.author}
        </span>
      </footer>
    </>
  )
}

export default Footer
