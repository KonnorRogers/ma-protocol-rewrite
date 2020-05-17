/** @jsx jsx */
import { jsx, Box, Flex, useThemeUI } from "theme-ui"

export function CheckBox({ children, ...rest }) {
  const { theme } = useThemeUI()

  let color = theme.colors.text
  console.log(color)

  return (
    <Box
      sx={{
        flex: "0 0 1rem",
        marginTop: "0.45rem",
        marginRight: "1rem",
        height: "1rem",
        width: "1rem",
        border: `1px solid ${color}`,
        boxShadow: `2px 2px 1px rgba(${color}, 0.7)`,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export function Wrapper({ children, ...rest }) {
  return (
    <Flex sx={{ flexDirection: "column", margin: "1rem" }} {...rest}>
      {children}
    </Flex>
  )
}

export function List({ children, ...rest }) {
  return <Flex {...rest}>{children}</Flex>
}

const CheckList = {
  List: List,
  Wrapper: Wrapper,
  CheckBox: CheckBox,
}

export default CheckList
