import * as React from 'react'
import Footer from "../components/footer.js"
import PageNav from "../components/pageNav.js"
import Title from "../components/title.js"

export default ({ children, doc }) => (
  <>
    <main>
      <PageNav data-testid="page-nav" />
      <Title data-testid="page-title" />
      {children}
      <Footer />
    </main>
  </>
)
