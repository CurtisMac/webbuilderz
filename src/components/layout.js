import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { Helmet } from "react-helmet"
import "../utils/styles.css"

import NavHeader from "../components/mainNav"

export default props => (
  <div className="application">
    <Helmet>
      <html lang="en"></html>
      <title>{props.title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <>
        {props.noNav ? "" : <NavHeader />}
        {props.children}
      </>
    </ThemeProvider>
  </div>
)
