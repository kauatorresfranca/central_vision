import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const TestimonialsSection = styled.section`
  padding: 80px 0;
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

  p {
    color: #666;
    font-size: 16px;
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
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 15px;
    color: #444;
    line-height: 1.6;
    margin-top: 15px;
    font-style: italic;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;

  .user-meta {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .user-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #f0f0f0;
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

  .google-logo {
    width: 20px;
    height: 20px;
    object-fit: contain;
    opacity: 0.8;
  }
`

export const StarsRow = styled.div`
  display: flex;
  gap: 2px;
`

export const CtaArea = styled.div`
  text-align: center;
  margin-top: 50px;

  a {
    font-weight: 700;
    color: ${colors.primary};
    text-decoration: none;
    font-size: 16px;
    border-bottom: 2px solid ${colors.primary}30;
    padding-bottom: 4px;
    transition: all 0.2s;
    
    &:hover { 
      border-bottom-color: ${colors.primary};
      color: ${colors.secondary};
    }
  }
`