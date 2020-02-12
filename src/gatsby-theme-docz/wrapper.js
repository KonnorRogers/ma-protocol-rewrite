import * as React from 'react'
import Footer from "../components/footer.js"
import PageNav from "../components/pageNav.js"

export default ({ children, doc }) => (
  <>
    <main>
      {/* <PageNav data-testid="page-nav" /> */}
      {children}
      <Footer />
    </main>
  </>
)
