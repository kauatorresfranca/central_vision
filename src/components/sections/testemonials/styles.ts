import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const TestimonialsSection = styled.section`
  padding: 100px 0;
  background-color: #f8faff;
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
    margin-bottom: 16px;
    font-weight: 700;
    span { color: ${colors.primary}; }
  }

  .rating-summary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 15px;
    color: #666;

    strong { 
      font-size: 20px; 
      color: ${colors.secondary}; 
      font-weight: 800;
    }
    
    .stars { display: flex; gap: 3px; }

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      gap: 8px;
    }
  }
`

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ReviewCard = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;

  p {
    font-size: 15px;
    color: #444;
    line-height: 1.6;
    margin-top: 12px;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;

  .user-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-info {
    display: flex;
    flex-direction: column;

    .name-wrapper {
      display: flex;
      align-items: center;
      gap: 6px;

      strong {
        color: ${colors.secondary};
        font-size: 15px;
        font-weight: 700;
      }
    }

    span {
      color: #999;
      font-size: 12px;
    }
  }
`

export const StarsRow = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 4px;
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