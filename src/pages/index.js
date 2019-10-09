import React from "react"
import styled from "styled-components"

//Components
import Layout from "../components/layout"
import Landing from "../components/home/landing"

//Styles
const Container = styled.div`
  background-color: ${props => props.theme.colors.pri3};
  background-image: ${props => props.theme.gradients.colour};
  background-attachment: fixed;
`

const index = ({ data }) => (
  <Layout title="WebBuilderz ecommerce web development">
    <Container>
      <Landing />
    </Container>
  </Layout>
)

export default index
