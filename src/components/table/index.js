import * as React from "react"
import * as styles from "./styles.js"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"

/**
 * A basic table
 */
export function Table({ children, minWidth, colormode, ...rest }) {
  let colorMode = useColorMode()[0]

  if (colormode) {
    colorMode = colormode
  }

  return (
    <div css={styles.table({ minWidth, colorMode })} {...rest}>
      {children}
    </div>
  )
}

Table.propTypes = {
  minWidth: PropTypes.string,
}

export function TableRow({ children, heading, css, colormode, ...rest }) {
  const colorMode = colormode || useColorMode()[0]

  return (
    <div css={[styles.row({ heading, colorMode }), css]} {...rest}>
      {children}
    </div>
  )
}

TableRow.propTypes = {
  heading: PropTypes.bool,
}

TableRow.defaultProps = {
  heading: false,
}

export function TableItem({
  colspan,
  count,
  children,
  align,
  colormode,
  ...rest
}) {
  const colorMode = colormode || useColorMode()[0]

  return (
    <div css={styles.item({ colspan, align, colorMode })} {...rest}>
      {children}
    </div>
  )
}

TableItem.propTypes = {
  align: PropTypes.string,
  colspan: PropTypes.number,
}

TableItem.defaultProps = {
  align: "center",
  colspan: 1,
}

export function TableCell({ children, ...rest }) {
  return (
    <div css={styles.tableCell} {...rest}>
      {children}
    </div>
  )
}
