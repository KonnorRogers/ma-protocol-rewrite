import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from "../components/footer.js"

// const mainContainer = document.querySelector(`[data-testid="main-container"]`);
// const hi = <div>Hi</div>;
// console.log(mainContainer);


export default ({ children, doc }) => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{doc.value.name}</title>
    </Helmet>
    <main>
      {children}
      <Footer />
    </main>
  </>
)
