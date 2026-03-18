import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const BenefitsSection = styled.section`
  padding: 100px 0;
  background-color: #fff;

  .content {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    align-items: center;
    gap: 80px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 0;
    .content {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
`

export const ImageSide = styled.div`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }

  .experience-badge {
    position: absolute;
    bottom: -20px;
    right: -20px;
    background-color: ${colors.primary};
    color: #fff;
    padding: 24px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 149, 255, 0.3);

    strong {
      display: block;
      font-size: 32px;
      line-height: 1;
    }
    span {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
    .experience-badge {
      right: 20px;
    }
  }
`

export const TextSide = styled.div`
  .subtitle {
    color: ${colors.primary};
    font-weight: 800;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 40px;
    color: ${colors.secondary};
    margin-bottom: 20px;
    line-height: 1.2;

    span { color: ${colors.primary}; }
  }

  p {
    color: #666;
    font-size: 18px;
    margin-bottom: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h2 { font-size: 32px; }
  }

`

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .benefit-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;

    .icon {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      background-color: ${colors.primary}10;
      color: ${colors.primary};
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h3 {
      font-size: 18px;
      color: ${colors.secondary};
      margin-bottom: 8px;
      font-weight: 700;
    }

    p {
      font-size: 15px;
      margin-bottom: 0;
      line-height: 1.5;
    }
  }
`