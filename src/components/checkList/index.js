/** @jsx jsx */
import { jsx, Box, Flex, useThemeUI } from "theme-ui"
import hexToRGB from "../../utils/hexToRGB"

export function CheckBox({ children, ...rest }) {
  const { theme } = useThemeUI()

  let color = theme.colors.text

  const boxShadowColor = hexToRGB(color, "0.7")

  return (
    <Box
      sx={{
        flex: "0 0 1rem",
        marginTop: "0.45rem",
        marginRight: "1rem",
        height: "1rem",
        width: "1rem",
        border: `1px solid ${color}`,
        boxShadow: `1px 1px 1px ${boxShadowColor}`,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export function Wrapper({ children, ...rest }) {
  return (
    <Flex
      sx={{ width: ["100%", "45%"], flexDirection: "column", margin: "1rem" }}
      {...rest}
    >
      {children}
    </Flex>
  )
}

export function List({ children, ...rest }) {
  return <Flex {...rest}>{children}</Flex>
}

export function UnderlinedBox({ children, ...rest }) {
  const { theme } = useThemeUI()

  let color = theme.colors.text
  return (
    <Box
      sx={{
        borderBottom: `1px solid ${color}`,
        width: "fit-content",
        marginBottom: "0.75rem",
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const CheckList = {
  List: List,
  Wrapper: Wrapper,
  CheckBox: CheckBox,
  UnderlinedBox: UnderlinedBox,
}

export default CheckList
