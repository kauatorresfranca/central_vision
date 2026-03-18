import styled from 'styled-components'
import { colors, breakpoints } from '../../../../styles'

export const HeroContainer = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #fff 0%, #f0f7ff 100%);
  overflow: hidden;

  .content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    gap: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 0;
    .content {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`

export const TextBlock = styled.div`
  .badge {
    color: ${colors.primary};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 13px;
    display: inline-block;
    margin-bottom: 20px;
    background-color: ${colors.primary}15;
    padding: 6px 16px;
    border-radius: 50px;
  }

  h1 {
    font-size: 46px;
    color: ${colors.secondary};
    line-height: 1.1;
    margin-bottom: 20px;

    strong {
      color: ${colors.primary};
      font-weight: 800;
    }
  }

  p {
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 540px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    h1 { font-size: 34px; }
    p { margin: 0 auto 30px; }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`

const BaseButton = styled.a`
  padding: 16px 30px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 15px;
  transition: all 0.3s ease;
  text-align: center;
`

export const PrimaryBtn = styled(BaseButton)`
  background-color: ${colors.accent};
  color: #fff;
  box-shadow: 0 8px 15px rgba(0, 200, 83, 0.2);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
    box-shadow: 0 10px 20px rgba(0, 200, 83, 0.3);
  }
`

export const SecondaryBtn = styled(BaseButton)`
  background-color: ${colors.primary}10; // Azul com 10% de opacidade
  color: ${colors.primary};
  border: 1px solid ${colors.primary}30;

  &:hover {
    background-color: ${colors.primary}20;
    transform: translateY(-2px);
  }
`

export const TrustList = styled.ul`
  display: flex;
  gap: 24px;
  padding: 0;

  li {
    font-size: 14px;
    font-weight: 600;
    color: ${colors.secondary};
    display: flex;
    align-items: center;
    gap: 10px;

    .icon-circle {
      width: 24px;
      height: 24px;
      background-color: ${colors.primary}20;
      color: ${colors.primary};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`

export const ImageBlock = styled.div`
  position: relative;

  .image-frame {
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 20px 20px 60px rgba(0, 46, 109, 0.1);
    
    img {
      width: 100%;
      height: 520px;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.03);
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    .image-frame img {
      height: 380px;
    }
  }
`