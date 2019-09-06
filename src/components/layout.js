import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { Helmet } from "react-helmet"
import "../utils/styles.css"

export default ({ children }) => (
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </div>
)
