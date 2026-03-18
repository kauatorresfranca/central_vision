import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const ContactSection = styled.section`
  padding: 100px 0;
  background-color: #fcfcfc;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: ${colors.primary}15;
    color: ${colors.primary};
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 36px;
    color: ${colors.secondary};
    margin-bottom: 12px;
    font-weight: 700;

    span {
      color: ${colors.primary};
    }
  }

  p {
    font-size: 16px;
    color: #666;
    max-width: 500px;
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
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
    border-color: ${colors.primary}30;
  }

  .icon-box {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${colors.primary}15;
    color: ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: all 0.3s ease;
  }

  &:hover .icon-box {
    background-color: ${colors.primary};
    color: #fff;
    transform: scale(1.1);
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
    margin-bottom: 20px;
    flex-grow: 1;
  }

  .status {
    font-size: 12px;
    font-weight: 700;
    padding: 6px 16px;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &.open {
      color: #00c853;
      background: #00c85315;
    }

    &.closed {
      color: #ff4d4d;
      background: #ff4d4d15;
    }
  }
`

export const CardLink = styled.a`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.secondary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #f8f9fa;
  border: 1px solid #eee;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.secondary};
    color: #fff;
    border-color: ${colors.secondary};
  }
`