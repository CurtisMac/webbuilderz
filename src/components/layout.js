import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { Helmet } from "react-helmet"
import "../utils/styles.css"

export default ({ children }) => (
  <div className="application">
    <Helmet>
      <title>WebBuilderz</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </div>
)
