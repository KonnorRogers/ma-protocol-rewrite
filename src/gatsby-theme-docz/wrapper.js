import React, { useEffect } from "react"
import Footer from "../components/footer.js"
import PageNav from "../components/pageNav.js"
import Title from "../components/title.js"

export default ({ children }) => {
  function getTitle() {
    return document.querySelector('[data-testid="page-title"]')
  }

  function getPageNav() {
    return document.querySelector('[data-testid="page-nav"]')
  }

  function getMainContainer() {
    return document.querySelector('[data-testid="main-container"]')
  }

  // Equivalent to componentDidMount / componentDidUpdate
  useEffect(() => {
    const bottomPageNav = getPageNav().cloneNode(true)
    const mainContainer = getMainContainer()

    if (window.location.pathname !== "/") {
      mainContainer.insertAdjacentElement("afterbegin", getTitle())
    } else {
      // Remove the title if on the homepage
      getTitle().parentNode.removeChild(getTitle())
    }

    mainContainer.insertAdjacentElement("afterbegin", getPageNav())
    mainContainer.insertAdjacentElement("beforeend", bottomPageNav)
  }, children)

  return (
    <>
      <main>
        <PageNav data-testid="page-nav" />
        <Title data-testid="page-title" />
        {children}
        <Footer />
      </main>
    </>
  )
}
