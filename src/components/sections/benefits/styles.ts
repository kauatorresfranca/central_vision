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

  @media (max-width: ${breakpoints.tablet}) {
    order: 2;
  }
`

export const StatsFlex = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  width: 90%;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    bottom: 20px;
    gap: 10px;
  }
`

export const StatBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 100px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: ${colors.primary};

  strong {
    font-size: 22px;
    font-weight: 800;
    margin-top: 8px;
    color: ${colors.secondary};
  }

  span {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    color: #666;
    letter-spacing: 0.5px;
  }

  svg {
    opacity: 0.8;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
    strong { font-size: 18px; }
    span { font-size: 9px; }
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
      line-height: 1.5;
    }
  }
`