import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./styles.js"

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

  return (
    <>
      <footer css={styles.footer}>
        © {new Date().getFullYear()}
        &nbsp; | &nbsp; Built with
        <a href="https://www.gatsbyjs.org" css={styles.gatsbyLink}>
          Gatsby
        </a>
        <span css={styles.author}>
          Created and maintained by {data.site.siteMetadata.author}
        </span>
      </footer>
    </>
  )
}

export default Footer
