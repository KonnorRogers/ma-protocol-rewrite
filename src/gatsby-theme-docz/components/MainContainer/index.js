import { MainContainer as OriginalMainContainer } from "gatsby-theme-docz/src/components/MainContainer/index"
import PageNav from "../../../components/pageNav"
import Title from "../../../components/title"

export const MainContainer = ({ children, ...rest }) => {
  return (
    <OriginalMainContainer {...rest} style={{ maxWidth: "1200px" }}>
      <PageNav data-testid="top-page-nav" />
      <section
        style={{ maxWidth: "800px", margin: "auto" }}
        data-testid="main-items"
      >
        <Title data-testid="page-title" />
        {children}
      </section>
      <PageNav data-testid="bottom-page-nav" />
    </OriginalMainContainer>
  )
}
