import React from "react"
import styled, { css } from "styled-components"

import Header from "../components/header"
import Layout from "../components/layout"

//Styles
const Paragraph = styled.p`
  color: blue;

  ${props =>
    props.pink &&
    css`
      color: ${props => props.theme.main};
    `}
`

export default () => (
  <Layout pageTitle="WebBuilderz">
    <Header headerText="Hello Gatsby!" />
    <Paragraph pink>What a world.</Paragraph>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
