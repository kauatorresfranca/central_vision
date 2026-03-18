import styled from 'styled-components'
import { colors } from '../../../../styles'

export const FaqSection = styled.section`
  padding: 100px 0;
  background-color: #fff;
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
  }

  h2 {
    font-size: 36px;
    color: ${colors.secondary};
    margin-bottom: 12px;
    span { color: ${colors.primary}; }
  }

  p { color: #666; font-size: 16px; }
`

export const FaqList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FaqItem = styled.div<{ $isOpen: boolean }>`
  border: 1px solid ${props => props.$isOpen ? colors.primary + '40' : '#eee'};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: ${props => props.$isOpen ? '#f8faff' : '#fff'};

  button {
    width: 100%;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    text-align: left;
    font-size: 17px;
    font-weight: 700;
    color: ${colors.secondary};
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${colors.primary};
    }

    .chevron {
      transition: transform 0.3s ease;
      transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
      color: ${props => props.$isOpen ? colors.primary : '#ccc'};
    }
  }

  .answer {
    max-height: ${props => props.$isOpen ? '200px' : '0'};
    opacity: ${props => props.$isOpen ? '1' : '0'};
    overflow: hidden;
    transition: all 0.3s ease;
    padding: ${props => props.$isOpen ? '0 24px 20px' : '0 24px'};

    p {
      color: #555;
      line-height: 1.6;
      font-size: 15px;
    }
  }
`

export const ContactCta = styled.div`
  margin-top: 50px;
  text-align: center;

  p {
    color: #666;
    margin-bottom: 16px;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: #25d366;
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
      background-color: #128c7e;
    }
  }
`