import styled from "styled-components"

export const Title = styled.h2`
  color: ${props => props.theme.colors[props.color]};
  font-size: 1.8rem;
  margin-top: 0;
  text-transform: uppercase;
  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: 1.5rem;
  }
`
export const SubTitle = styled.h2`
  font-size: 2.2rem;
  @media (max-width: ${props => props.theme.screen.small}) {
    font-size: 1.7rem;
  }
`
export const Text = styled.p`
  font-size: 1.5rem;
  font-style: italic;
`
export const SectionSpacing = `180px`
