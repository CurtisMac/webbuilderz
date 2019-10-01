import React from "react"
import styled from "styled-components"

//Components
import PricingCards from "../pricingCards"
import Button from "../styledButton"

//Styles
const Container = styled.div``
const ButtonWrapper = styled.div`
  text-align: center;
  padding: 15px;
  margin-bottom: 25px;
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
