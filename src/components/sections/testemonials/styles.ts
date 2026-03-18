import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const TestimonialsSection = styled.section`
  padding: 80px 0;
  background-color: #f8faff;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  .google-logo {
    width: 32px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 32px;
    color: ${colors.secondary};
    margin-bottom: 12px;
    span { color: ${colors.primary}; }
  }

  .rating-summary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 15px;
    color: #555;

    strong { font-size: 20px; color: ${colors.secondary}; }
    .stars { display: flex; gap: 2px; }
  }
`

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ReviewCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;

    .user-info {
      display: flex;
      flex-direction: column;
      strong { color: ${colors.secondary}; font-size: 16px; }
      span { color: #999; font-size: 12px; }
    }

    .mini-google { width: 18px; opacity: 0.6; }
  }

  .stars {
    margin-bottom: 15px;
    display: flex;
    gap: 2px;
  }

  p {
    font-size: 15px;
    color: #555;
    line-height: 1.6;
    font-style: italic;
  }
`

export const CtaArea = styled.div`
  text-align: center;
  margin-top: 40px;

  a {
    font-weight: 700;
    color: ${colors.primary};
    text-decoration: underline;
    font-size: 15px;
    transition: opacity 0.2s;
    &:hover { opacity: 0.7; }
  }
`