import React from "react"
import styled from "styled-components"

//Components
import PricingCards from "../pricingCards"
import Button from "../styledButton"

//Styles
const Container = styled.div`
  background-color: white;

  padding-bottom: 35px;
`
const ButtonWrapper = styled.div`
  text-align: center;
`

const index = () => (
  <Container>
    <PricingCards />
    <ButtonWrapper>
      <Button primary={1} to="/contact">
        Enquire Now
      </Button>
    </ButtonWrapper>
  </Container>
)

export default index
