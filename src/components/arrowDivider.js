import React from "react"
import styled from "styled-components"

//Assets
import arrow from "../data/img/arrow.svg"

const Container = styled.div`
  margin-top: -25px;
  height: 140px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
`

export default () => <Container></Container>
