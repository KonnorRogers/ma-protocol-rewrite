import React, { useEffect } from "react"
import Footer from "../components/footer.js"
import PageNav from "../components/pageNav.js"
import Title from "../components/title.js"

export default ({ children }) => {
  function getTitle() {
    return document.querySelector('[data-testid="page-title"]')
  }

  function getTopPageNav() {
    return document.querySelector('[data-testid="top-page-nav"]')
  }

  function getBottomPageNav() {
    return document.querySelector('[data-testid="bottom-page-nav"]')
  }

  function getMainContainer() {
    return document.querySelector('[data-testid="main-container"]')
  }

  // Equivalent to componentDidMount / componentDidUpdate
  useEffect(() => {
    const mainContainer = getMainContainer()

    if (window.location.pathname !== "/") {
      mainContainer.insertAdjacentElement("afterbegin", getTitle())
    } else {
      // Remove the title if on the homepage
      getTitle().parentNode.removeChild(getTitle())
    }

    mainContainer.insertAdjacentElement("afterbegin", getTopPageNav())
    mainContainer.insertAdjacentElement("beforeend", getBottomPageNav())
  }, children)

  return (
    <>
      <main>
        <PageNav data-testid="top-page-nav" />
        <PageNav data-testid="bottom-page-nav" />
        <Title data-testid="page-title" />
        {children}
        <Footer />
      </main>
    </>
  )
}
