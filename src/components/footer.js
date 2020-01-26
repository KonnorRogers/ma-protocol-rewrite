import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <footer
        style={{ background: `rgba(0, 0, 0, 0.07)` }}
        className="flex-shrink-0 px-2 py-2 mx-auto text-sm text-center md:text-md md:flex md:justify-center lg:text-lg"
      >
        © {new Date().getFullYear()}
        &nbsp; | &nbsp; Built with
        <a
          href="https://www.gatsbyjs.org"
          className="px-1 mx-1 text-purple-700 hover:bg-purple-700 hover:text-gray-100"
        >
          Gatsby
        </a>
        <div className="sm:hidden">
          <br></br>Created and maintained by {data.site.siteMetadata.author}
        </div>
        <span className="hidden sm:inline-block">
          | &nbsp; Created and maintained by {data.site.siteMetadata.author}
        </span>
      </footer>
    </>
  )
}

export default Footer
