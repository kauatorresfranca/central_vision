import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const BenefitsSection = styled.section`
  padding: 80px 0;
  background-color: #fcfcfc;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 36px;
    color: ${colors.secondary};
    margin-bottom: 12px;

    span {
      color: ${colors.primary};
    }
  }

  p {
    font-size: 16px;
    color: #666;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 { font-size: 28px; }
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: #fff;
  padding: 40px 24px;
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  .icon-box {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    color: #fff;

    &.blue { background: #0095ff; }
    &.cyan { background: #00ced1; }
    &.green-teal { background: #00bfa5; }
    &.green { background: #00c853; }
  }

  h3 {
    font-size: 18px;
    color: ${colors.secondary};
    margin-bottom: 16px;
    font-weight: 700;
  }

  p {
    font-size: 15px;
    color: #777;
    line-height: 1.6;
  }
`