// import { MainContainer as OriginalMainContainer } from "gatsby-theme-docz/src/components/MainContainer"
import PageNav from "../../../components/pageNav"
import Title from "../../../components/title"
export const MainContainer = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <PageNav data-testid="top-page-nav" />
      <Title data-testid="page-title" />
      {children}
      <PageNav data-testid="bottom-page-nav" />
    </div>
  )
}
