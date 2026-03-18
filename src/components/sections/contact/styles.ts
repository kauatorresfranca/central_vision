import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const ContactSection = styled.section`
  padding: 80px 0;
  background-color: #fff;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: ${colors.primary}10;
    color: ${colors.primary};
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 16px;
  }

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

export const ContactGrid = styled.div`
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

export const ContactCard = styled.div`
  background: #fff;
  padding: 40px 24px;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-color: ${colors.primary}30;
  }

  .icon-box {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    color: #fff;

    &.blue { background: #0095ff; }
    &.cyan { background: #00ced1; }
    &.green-teal { background: #00bfa5; }
    &.green { background: #00c853; }
  }

  h3 {
    font-size: 18px;
    color: ${colors.secondary};
    margin-bottom: 8px;
    font-weight: 700;
  }

  p {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .link {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.primary};
    text-decoration: underline;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  .status {
    font-size: 12px;
    font-weight: 700;
    color: #00c853;
    background: #00c85315;
    padding: 4px 12px;
    border-radius: 50px;
  }
`