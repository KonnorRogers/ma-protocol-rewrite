import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import * as styles from "./styles.js"

export const PureFooter = ({ data }) => (
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

/**
To ensure the author is pulled in correctly
data: { site: { siteMetadata: { author: 'string' } } }
should be how the graphql queries returns the data
*/
PureFooter.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.string,
      }),
    }),
  }),
}

export const Footer = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return <PureFooter {...props} data={data} />
}

export default Footer
