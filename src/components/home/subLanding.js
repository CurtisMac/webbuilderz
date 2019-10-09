import React from "react"
import styled from "styled-components"

//Assets
import banner from "../../data/img/banner.svg"

//Styles
const Container = styled.div`
  /* background-color: ${props => props.theme.colors.pri3}; */
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
`

export default () => {
  return <Container>Hi</Container>
}
