import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import "../utils/styles.css"

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)
